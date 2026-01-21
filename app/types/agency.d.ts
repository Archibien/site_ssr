import type { ImageMeta } from './places'

export interface Agency {
  name: string
  logo: {
    default: string
    original: string
  }
  city: string
  type: string
  url: string
  is_subscribed: bool
  work_zones: AgencyWorkZone[]
}

export interface AgencyWithMeta {
  name: string
  logo?: {
    default: string
    original: string
  }
  city: string
  type: string
  url: string
  is_subscribed: bool
  work_zones: AgencyWorkZone[]
  metadata: {
    title: string
    alt: string
  }
}

export interface AgencyWorkZone {
  city: string
  department: string
}

export interface AgencyDetailedWorkZone {
  city: string
  department: string
  lat: number
  lng: number
  radius: number
}

export interface AgencyDetails {
  name: string
  logo: {
    default: string
    original: string
  }
  banner: {
    hd: string
    original: string
  }
  public_id: string
  description: string
  project_types: string[]
  project_categories: string[]
  architectes: string[]
  copyright_banner: string
  type: string
  work_zones: AgencyDetailedWorkZone[]
  tags: string[]
  is_member_verified: boolean
  order_num: number
  url: string
  references: ReferenceWithMeta[]
  dep_code: string
  similar_agencies: AgencyWithMeta[]
  city: string
  is_subscribed: bool
  metadata: {
    agency_title: string
    map_title: string
    cities: string
    logo: ImageMeta
    banner: ImageMeta
    architectes: ImageMeta[]
  }
}
