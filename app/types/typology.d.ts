export interface TypologyImage {
  url: string
  alt: string
  title: string
}

export interface Typology {
  name: string
  name_plural: string
  slug: string
  actions: string[]
  title_page: string
  categories: string[]
  masculine: boolean
  image: TypologyImage
  background_image: TypologyImage
  housing: boolean
}
