import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

/* ───────────────── setup (__dirname replacement) ───────────────── */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* ───────────────── paths ───────────────── */

const GEOJSON_PATH = path.resolve(__dirname, '../communes-1000m.geojson')
const CITIES_PATH = path.resolve(__dirname, '../app/data/cities.ts')
const OUTPUT_PATH = path.resolve(__dirname, '../app/data/cities.with-bounds.ts')

/* ───────────────── types ───────────────── */

type Bounds = {
  north: number
  south: number
  east: number
  west: number
}

/* ───────────────── helpers ───────────────── */

function computeBoundsFromGeometry(geometry: any): Bounds {
  let north = -Infinity
  let south = Infinity
  let east = -Infinity
  let west = Infinity

  const processRing = (ring: number[][]) => {
    for (const [lng, lat] of ring) {
      if (lat > north) north = lat
      if (lat < south) south = lat
      if (lng > east) east = lng
      if (lng < west) west = lng
    }
  }

  if (geometry.type === 'Polygon') {
    geometry.coordinates.forEach(processRing)
  }

  if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach((polygon: number[][][]) => polygon.forEach(processRing))
  }

  return { north, south, east, west }
}

/* ───────────────── load geojson ───────────────── */

const geojson = JSON.parse(fs.readFileSync(GEOJSON_PATH, 'utf-8'))

/* ───────────────── load cities (ESM-safe) ───────────────── */

const citiesModule = await import(pathToFileURL(CITIES_PATH).href)
const cities = citiesModule.cities

/* ───────────────── index communes ───────────────── */

const communeIndex = new Map<string, any>()

for (const feature of geojson.features) {
  const key = `${feature.properties.departement}|${feature.properties.nom.toLowerCase()}`
  communeIndex.set(key, feature)
}

/* ───────────────── enrich cities ───────────────── */

let missing = 0

for (const department of Object.keys(cities)) {
  for (const city of cities[department]) {
    const key = `${department}|${city.city.toLowerCase()}`
    const commune = communeIndex.get(key)

    if (!commune) {
      missing++
      console.warn(`⚠️  Missing geometry: ${city.city} (${department})`)
      continue
    }

    city.bounds = computeBoundsFromGeometry(commune.geometry)
  }
}

/* ───────────────── write output ───────────────── */

const output = `/* AUTO-GENERATED FILE — DO NOT EDIT MANUALLY */

export const cities = ${JSON.stringify(cities, null, 2)}
`

fs.writeFileSync(OUTPUT_PATH, output, 'utf-8')

console.log('✅ Cities enriched with bounds')
console.log(`📍 Missing geometries: ${missing}`)
console.log(`📄 Output written to: ${OUTPUT_PATH}`)
