export interface Department {
  prefix1: string
  prefix2: string
  phone: string
  department: string
  departmentSlug: string
  region: string
  regionSlug: string
  url: string
  cities: string[]
  lat: number
  lng: number
  bounds: {
    north: number
    south: number
    east: number
    west: number
  }
}

export interface City {
  city: string
  department: string
  region: string
  post_code: string
  dep_code: string
  lat: number
  lng: number
  url: string
  prefix: string
  prefix2?: string
  bounds: {
    north: number
    south: number
    east: number
    west: number
  }
}

export interface ImageMeta {
  title: string
  alt: string
}
