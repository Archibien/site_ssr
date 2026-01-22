const typologies = {
  maison: {
    short: 'Maison',
    withPrefix: "d'une maison",
    withPrefixPlural: 'de maisons'
  },
  appartement: {
    short: 'Appartement',
    withPrefix: "d'un appartement",
    withPrefixPlural: "d'appartements"
  },
  extension: {
    short: 'Extension',
    withPrefix: "d'une extension",
    withPrefixPlural: "d'extensions"
  },
  immeuble: {
    short: 'Immeuble',
    withPrefix: "d'un immeuble",
    withPrefixPlural: "d'immeubles"
  },
  surelevation: {
    short: 'Surélevation',
    withPrefix: "d'une surélévation",
    withPrefixPlural: 'de surélévations'
  },
  atelier_loft: {
    short: 'Atelier ou loft',
    withPrefix: "d'un atelier ou d'un loft",
    withPrefixPlural: "d'ateliers ou de lofts"
  },
  garage: {
    short: 'Garage',
    withPrefix: 'd\'un garage',
    withPrefixPlural: 'de garages'
  },
  espaces_exts: {
    short: 'Espaces extérieurs',
    withPrefix: 'd\'espaces extérieurs',
    withPrefixPlural: 'd\'espaces extérieurs'
  },
  bureaux: {
    short: 'Bureaux',
    withPrefix: 'de bureaux',
    withPrefixPlural: 'de bureaux'
  },
  boutique_local: {
    short: 'Boutique ou local',
    withPrefix: "d'une boutique ou d'un local",
    withPrefixPlural: 'de boutiques ou de locaux'
  },
  cafe_restaurant: {
    short: 'Café ou restaurant',
    withPrefix: "d'un café ou d'un restaurant",
    withPrefixPlural: 'de cafés ou de restaurants'
  },
  hotel: {
    short: 'Hôtel',
    withPrefix: "d'un hôtel",
    withPrefixPlural: "d'hôtels"
  },
  local: {
    short: 'Local technique ou agricole',
    withPrefix: "d'un local technique ou agricole",
    withPrefixPlural: 'de locaux techniques ou agricoles'
  },
  logement: {
    short: 'Logement',
    withPrefix: "d'un logement",
    withPrefixPlural: 'de logements'
  },
  equipement: {
    short: 'Équipement',
    withPrefix: "d'un équipement",
    withPrefixPlural: "d'équipements"
  },
  espaces_exts_pro: {
    short: 'Espaces extérieurs',
    withPrefix: "d'espaces extérieurs",
    withPrefixPlural: "d'espaces extérieurs"
  },
  monument_historique: {
    short: 'Monument historique',
    withPrefix: "d'un monument historique",
    withPrefixPlural: 'de monuments historiques'
  },
  autre: {
    short: 'Autre',
    withPrefix: '',
    withPrefixPlural: ''
  }
}

const tasks = {
  construction: 'Construction',
  renovation: 'Rénovation',
  rehabilitation: 'Réhabilitation',
  amenagement: 'Aménagement',
  agrandissement_extension: 'Agrandissement ou extension',
  surelevation: 'Surélévation',
  autre: 'Autre'
}

const categories = {
  maison: 'Maison',
  appartement: 'Appartement',
  extension: 'Extension',
  immeuble: 'Immeuble',
  surelevation: 'Surélevation',
  atelier_loft: 'Atelier ou Loft',
  garage: 'Garage',
  espaces_exts: 'Aménagements extérieurs',
  bureaux: 'Bureaux',
  boutique_local: 'Boutique ou local',
  cafe_restaurant: 'Café ou restaurant',
  hotel: 'Hôtel',
  local: 'Local technique ou agricole',
  logement: 'Logements',
  equipement: 'Équipements'
}

const clientProjectTypes = {
  particulier: 'Particuliers',
  professionnel: 'Professionnel (TPE)',
  entreprise: 'Entreprise',
  collectivite: 'Collectivité ou organisme public',
  association: 'Association'
}

export {
  typologies,
  tasks,
  categories,
  clientProjectTypes
}
