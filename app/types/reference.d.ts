import type { Agency } from './agency'
import type { ImageMeta } from './places'

export interface Reference {
  title: string
  url: string
  description: string
  banner: {
    original?: string
    thumbnail: string
  }
  city: string
  department: string
  dep_code: string
  post_code: string
  agency: string
  region: string
}

export interface ReferenceWithMeta {
  title: string
  url: string
  description: string
  banner: {
    original?: string
    thumbnail: string
  }
  city: string
  department: string
  dep_code: string
  post_code: string
  agency: string
  region: string
  metadata: {
    title: string
    alt: string
  }
}

export interface ReferenceDetails {
  reference: {
    agency: Agency
    banner: {
      hd: string
      original?: string
      thumbnail: string
    }
    images: string[]
    title: string
    description: string
    copyright_banner: string
    type: string
    category: string
    client_type: string
    area: number
    budget: number
    mission: string
    state: string
    architectes: string[]
    url: string
    city_url: string
    dep_code: string
    city: string
    department: string
    region: string
    post_code: string
    lat: number
    lng: number
  }
  similar_references: ReferenceWithMeta[]
  near_agencies: object[]
  meta: {
    images: ImageMeta
    agency: ImageMeta
    banner: ImageMeta
    archis: string
    agency_locations: string
  }
  typology_slug: string
}
