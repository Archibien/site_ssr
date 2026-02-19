import { cities } from '../app/data/cities.with-bounds.ts' // original file
import { writeFileSync } from 'fs'

const enrichedCities = Object.fromEntries(
  Object.entries(cities).map(([depCode, cityList]) => [
    depCode,
    cityList.map((city) => ({
      ...city,
      dep_code: depCode,
    })),
  ])
)

const output = `export const cities = ${JSON.stringify(enrichedCities, null, 2)} as const;
`

writeFileSync('cities.with-dep-code.ts', output, 'utf-8')

console.log('✅ cities.with-dep-code.ts generated')
