import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

type Bounds = {
  north: number
  south: number
  east: number
  west: number
}

type OutputItem = {
  region: string
  department: string
  city: string
  post_code: string
  url: string
  lat: number
  lng: number
  prefix: string
  bounds: Bounds
  dep_code: string
}

const API_URL =
  'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arrondissements/records?limit=20'

async function getArrondissements() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  return res.json()
}

// Compute bounding box from Polygon geometry
function computeBoundsFromPolygon(polygon: any): Bounds {
  const coords = polygon.coordinates.flat()
  let north = -Infinity
  let south = Infinity
  let east = -Infinity
  let west = Infinity

  coords.forEach(([lng, lat]: [number, number]) => {
    north = Math.max(north, lat)
    south = Math.min(south, lat)
    east = Math.max(east, lng)
    west = Math.min(west, lng)
  })

  return { north, south, east, west }
}

;(async () => {
  try {
    const data: any = await getArrondissements()

    const results = data.results

    const arrs: OutputItem[] = results.map((rec: any) => {
      const post_code = String(rec.c_arinsee).slice(0, 5) // e.g., 75110
      const arrNum = Number(post_code.slice(-2)) // 10 from 75110
      const city = arrNum === 1 ? 'Paris 1er arrondissement' : `Paris ${arrNum}e arrondissement`

      // center from geom_x_y
      const lat = rec.geom_x_y.lat
      const lng = rec.geom_x_y.lon

      // bounds from Polygon
      const bounds: Bounds = computeBoundsFromPolygon(rec.geom.geometry)

      return {
        region: 'Île-de-France',
        department: 'Paris',
        city,
        post_code,
        url: `/france/ile-de-france/75-arrondissement-de-paris/${post_code}-${city
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/é/g, 'e')}/architectes/`,
        lat,
        lng,
        prefix: `à ${city}`,
        bounds,
        dep_code: '75',
      }
    })

    const outPath = path.resolve(process.cwd(), 'paris-arrondissements-api.ts')

    const content = `export const parisArrondissements = ${JSON.stringify(
      arrs,
      null,
      2
    )} as const;\n`

    fs.writeFileSync(outPath, content)

    console.log(`✨ Created ${outPath} with ${arrs.length} arrondissements`)
  } catch (err) {
    console.error('✖ Error generating arrondissements:', err)
  }
})()
