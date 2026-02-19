const typologies = {
  maison: {
    short: 'Maison',
    withPrefix: "d'une maison",
    withPrefixPlural: 'de maisons',
  },
  appartement: {
    short: 'Appartement',
    withPrefix: "d'un appartement",
    withPrefixPlural: "d'appartements",
  },
  extension: {
    short: 'Extension',
    withPrefix: "d'une extension",
    withPrefixPlural: "d'extensions",
  },
  immeuble: {
    short: 'Immeuble',
    withPrefix: "d'un immeuble",
    withPrefixPlural: "d'immeubles",
  },
  surelevation: {
    short: 'Surélevation',
    withPrefix: "d'une surélévation",
    withPrefixPlural: 'de surélévations',
  },
  atelier_loft: {
    short: 'Atelier ou loft',
    withPrefix: "d'un atelier ou d'un loft",
    withPrefixPlural: "d'ateliers ou de lofts",
  },
  garage: {
    short: 'Garage',
    withPrefix: "d'un garage",
    withPrefixPlural: 'de garages',
  },
  espaces_exts: {
    short: 'Espaces extérieurs',
    withPrefix: "d'espaces extérieurs",
    withPrefixPlural: "d'espaces extérieurs",
  },
  bureaux: {
    short: 'Bureaux',
    withPrefix: 'de bureaux',
    withPrefixPlural: 'de bureaux',
  },
  boutique_local: {
    short: 'Boutique ou local',
    withPrefix: "d'une boutique ou d'un local",
    withPrefixPlural: 'de boutiques ou de locaux',
  },
  cafe_restaurant: {
    short: 'Café ou restaurant',
    withPrefix: "d'un café ou d'un restaurant",
    withPrefixPlural: 'de cafés ou de restaurants',
  },
  hotel: {
    short: 'Hôtel',
    withPrefix: "d'un hôtel",
    withPrefixPlural: "d'hôtels",
  },
  local: {
    short: 'Local technique ou agricole',
    withPrefix: "d'un local technique ou agricole",
    withPrefixPlural: 'de locaux techniques ou agricoles',
  },
  logement: {
    short: 'Logement',
    withPrefix: "d'un logement",
    withPrefixPlural: 'de logements',
  },
  equipement: {
    short: 'Équipement',
    withPrefix: "d'un équipement",
    withPrefixPlural: "d'équipements",
  },
  espaces_exts_pro: {
    short: 'Espaces extérieurs',
    withPrefix: "d'espaces extérieurs",
    withPrefixPlural: "d'espaces extérieurs",
  },
  monument_historique: {
    short: 'Monument historique',
    withPrefix: "d'un monument historique",
    withPrefixPlural: 'de monuments historiques',
  },
  autre: {
    short: 'Autre',
    withPrefix: '',
    withPrefixPlural: '',
  },
}

const tasks = [
  { value: 'construction', label: 'Construction' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'rehabilitation', label: 'Réhabilitation' },
  { value: 'amenagement', label: 'Aménagement' },
  { value: 'agrandissement_extension', label: 'Agrandissement ou extension' },
  { value: 'surelevation', label: 'Surélévation' },
  { value: 'autre', label: 'Autre' },
]

const categories = [
  { value: 'maison', label: 'Maison' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'extension', label: 'Extension' },
  { value: 'immeuble', label: 'Immeuble' },
  { value: 'surelevation', label: 'Surélevation' },
  { value: 'atelier_loft', label: 'Atelier ou Loft' },
  { value: 'garage', label: 'Garage' },
  { value: 'espaces_exts', label: 'Aménagements extérieurs' },
  { value: 'bureaux', label: 'Bureaux' },
  { value: 'boutique_local', label: 'Boutique ou local' },
  { value: 'cafe_restaurant', label: 'Café ou restaurant' },
  { value: 'hotel', label: 'Hôtel' },
  { value: 'local', label: 'Local technique ou agricole' },
  { value: 'logement', label: 'Logements' },
  { value: 'equipement', label: 'Équipements' },
]

const clientProjectTypes = [
  { value: 'particulier', label: 'Particuliers' },
  { value: 'professionnel', label: 'Professionnel (TPE)' },
  { value: 'entreprise', label: 'Entreprise' },
  { value: 'collectivite', label: 'Collectivité ou organisme public' },
  { value: 'association', label: 'Association' },
]

export { typologies, tasks, categories, clientProjectTypes }
