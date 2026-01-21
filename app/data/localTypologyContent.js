export default {
  'construction-maison': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces, dépendances ou garages à prendre en compte, espaces extérieurs ou non, style, matériaux, performances énergétiques… </li> <li class="pb-min"> L’endroit où vous souhaitez construire votre maison : êtes-vous déjà propriétaire d’un terrain ? Quelles sont ses caractéristiques ? </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France, ou “ABF”) encadrent les possibilités de construction ou d’aménagement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes, se superposent, et certains éléments doivent être négociés, notamment à ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        }. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’une maison individuelle sur-mesure, en France, commence aux alentours de 1800€ HT par mètre carré. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreux projets sur des terrains de toutes sortes étudié les contraintes d’urbanisme applicables dans des contextes variés (en centre-ville, hameau, au bord de l’eau…), et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de construction de maison. Il existe 7 familles de critères à prendre en compte pour choisir un architecte pour construire sa maison : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour construire votre maison, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. <br> Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois le Permis de Construire obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore la maison : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). <br> Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ne soit purgé, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la maison',
        content:
          'Le suivi de chantier, qui est une partie importante de la mission de maîtrise d’oeuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de la maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.',
      },
    ],
    list: [
      {
        title: 'Construction de maison en bois',
        text: `Les maisons en bois ont le vent en poupe, et à juste titre : plus écologiques et rapides à construire, il n’y a pas réellement de limitations techniques liées à ce mode constructif. Plusieurs méthodes de construction existent et nous pourrons vous aider à déterminer celui qui est le plus pertinent pour votre projet : maison en ossature bois préfabriquée ou construite sur place, en panneaux en bois lamellé croisé (CLT), en madriers… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, en ${department}, bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'construction-maison-bois.jpg',
          alt: "Construction d'une maison en bois par un architecte",
        },
      },
      {
        title: 'Construction de maison moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour le minimalisme ont donné lieu à des constructions avec des compositions de volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez un logement de style moderne ou contemporain avec de grandes ouvertures, une toiture plate, des volumes atypiques et des espaces de vie agréables, l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'construction-maison-moderne.jpg',
          alt: "Construction d'une maison moderne par un architecte",
        },
      },
      {
        title: 'Construction de maison de charme',
        text: 'Si vous aimez un style architectural plus classique, traditionnel ou pittoresque, nos architectes pourront dessiner et réaliser avec vous la maison dont vous rêvez. Les toitures en pente peuvent par exemple permettre de créer des espaces avec des doubles hauteurs, et les formes compactes sont toujours un avantage d’un point écologique. Des matériaux comme la pierre, le plâtre, les enduits, des menuiseries en bois et de beaux revêtements de sols peuvent donner du charme à une maison traditionnelle.',
        image: {
          url: 'construction-maison-de-charme.jpg',
          alt: "Construction d'une maison de charme par un architecte",
        },
      },
      {
        title: 'Construction de maison modulaire ou en containers',
        text: `Aujourd’hui, de nombreuses techniques de construction permettent d’imaginer des architectures ambitieuses avec des prix et des délais de construction réduits. C’est le cas de la construction modulaire, où des éléments préfabriqués de dimensions standards sont réalisés en usine puis assemblés sur le terrain de la maison. Même si elles sont rares à ${cities[0]} et ${depPrefix} ${department}, les maisons réalisées en containers sont très demandées : des containers sont réunis et fixés entre eux pour créer des architectures uniques.`,
        image: {
          url: 'construction-maison-modulaire.jpg',
          alt: "Construction d'une maison modulaire par un architecte",
        },
      },
    ],
    listTitle: `Les différents types de maisons neuves ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre maison ${depPrefix} ${department}`,
      'Quelques maisons construites par nos architectes à proximité',
    ],
    blog: {
      image: 'construction-maison-blog.jpg',
      imageAlt: "construction d'une maison en Bretagne",
      url: 'https://blog.archibien.com/repondre-a-tant-de-contraintes-dans-un-seul-projet-relevait-du-challenge/',
      quote:
        '“Répondre à tant de contraintes pour cette maison neuve dans un seul projet relevait du challenge !”',
      author: 'Françoise',
    },
    questions: [
      {
        title: 'Faut-il trouver le terrain avant de commencer à travailler avec un architecte ?',
        answer: `<p>De nos jours, les contraintes les plus importantes pour pouvoir construire sur un terrain sont les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Aussi, concevoir une maison avant de connaître l’endroit où elle sera implantée n’est pas recommandé. Lors de votre recherche de terrain, n’hésitez pas à nous solliciter : Archibien peut vous aider à déterminer le potentiel de constructibilité d’une parcelle.</p>`,
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour construire sa maison ?',
        answer:
          '<p>Ce n’est pas toujours obligatoire : une maison de petite taille peut être construite par un constructeur de maison individuelle par exemple. Mais si vous voulez intervenir dans la conception de votre maison, si vous voulez une maison unique, ou si vous voulez une maison de plus de 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>',
      },
      {
        title: 'Est-ce plus cher de construire sa maison avec un architecte ?',
        answer:
          '<p>La réponse n’est pas simple. Les maisons qui ne sont pas construites par des architectes sont souvent des maisons modestes, réplicables, avec des matériaux et des performances basiques - elles ont donc souvent un prix de revient modéré, où les constructeurs dégagent néanmoins des marges confortables. De l’autre côté, les maisons demandées aux architectes peuvent aller d’une maison minimaliste et sobre à une maison luxueuse et complexe - les prix varient donc beaucoup. En réalité, ce n’est pas le fait de travailler avec un architecte qui rend une maison plus chère, c’est plutôt que les maisons qui sont demandées aux architectes sont souvent plus élaborées et donc plus coûteuses.</p>',
      },
    ],
  }),
  'extension-maison': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, en relation avec l’existant : connecter une extension suppose souvent d’intervenir sur le bâtiment existant </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France ou “ABF”) encadrent les possibilités d’extension et d’agrandissement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes et se superposent, et certains éléments doivent être négociés, notamment à ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        } </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’une extension sur-mesure, en France, commence aux alentours de 2000€ HT par mètre carré chauffé. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses extensions de maisons sur des parcelles de toutes sortes, étudié les contraintes d’urbanisme applicables dans des contextes variés, et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet d’extension. Il y a 7 familles de critères à prendre en compte pour choisir un architecte pour agrandir sa maison : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour agrandir votre logement, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois la DP ou le PC obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore l’extension : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ou la Déclaration préalable ne soit purgés, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: "5. Suivre le chantier et livrer l'extension",
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de l’extension de maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Agrandissement en bois',
        text: `Le bois est souvent utilisé pour les projets d’extensions ou d’agrandissement, à juste titre : plus écologique et rapide à construire, il n’y a pas réellement de limitations liées à ce mode constructif. Plusieurs techniques de construction existent et nous pourrons vous aider à déterminer la méthode la plus appropriée : extension en ossature bois préfabriquée ou construite sur place, en panneaux en bois lamellé croisé (CLT), en madriers… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, ${depPrefix} ${department}, bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'extension-maison-bois.jpg',
          alt: 'Extension de maison avec un bardage en bois, faite par un architecte',
        },
      },
      {
        title: 'Extension moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour le minimalisme ont donné lieu à des constructions avec des compositions de volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez un logement de style moderne ou contemporain avec de grandes ouvertures, une toiture plate, des volumes atypiques et des espaces de vie agréables, l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'extension-maison-contemporaine.jpg',
          alt: 'Agrandissement cubique de maison d’architecte en métal',
        },
      },
      {
        title: 'Agrandissement vitré ou véranda',
        text: 'Si votre projet d’extension vise à vous apporter plus de lumière où à “vivre dans votre jardin”, vous souhaitez sans doute réaliser une extension vitrée ou même une véranda. Différents styles peuvent être envisagés, en fonction de vos envies : cube en verre minimaliste, verrière atelier, véranda art déco ou style Eiffel… Le budget que représente une extension vitrée a souvent un bon retour sur investissement, tant à l’usage que pour la valeur de votre bien !',
        image: {
          url: 'extension-maison-veranda.jpg',
          alt: 'Extension d’une maison ancienne avec une véranda contemporaine',
        },
      },
      {
        title: 'Extension avec un toit plat',
        text: 'Contrairement aux idées reçues, les toits plats sont très fiables et donnent un look moderne indéniable à toute construction. C’est aussi une solution technique qui permet en général un chantier rapide et économique. Que votre extension vise à abriter un atelier, un garage ou des pièces de vie (nouvelle cuisine, salon ou salle à manger ouverts sur l’extérieur, nouvelle suite parentale ou chambre d’amis…), et sous réserve que le PLU autorise cette forme, ce type d’extension pourrait être pour vous !',
        image: {
          url: 'extension-maison-toit-plat.jpg',
          alt: 'Suite parentale construite en extension d’une maison, avec une toiture terrasse',
        },
      },
    ],
    listTitle: `Les différents types d'extensions ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre extension ${depPrefix} ${department}`,
      'Quelques extensions construites par nos architectes à proximité',
    ],
    blog: {
      image: 'extension-maison-blog.jpg',
      imageAlt: "extension d'une maison à Vannes",
      url: 'https://blog.archibien.com/extension-en-bois-vannes/',
      quote: 'Mieux qu’une extension, c’est une maisonnette autonome !',
      author: 'Anne-Lise et Jacques',
    },
    questions: [
      {
        title: 'Combien coûte une extension ?',
        answer: `<p>Quel est le prix au mètre carré d’une extension faite par un architecte ? Quel budget tout compris pour un agrandissement ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une extension ${depPrefix} ${department} pour moins de 2000 € TTC par mètre carré chauffé. Cette somme comprend le coût des travaux et les honoraires de l’architecte, mais pas les interventions sur l’existant, qui sont souvent nécessaires. En règle générale, il est recommandé de prévoir un budget supérieur, notamment pour se prémunir des variations de coûts de matériaux et des artisans, qui pèsent énormément sur l’enveloppe totale.</p> <p> Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par un “simple” maître d’oeuvre, non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par un maître d’oeuvre. </p>`,
      },
      {
        title: "Comment savoir s' il est possible de faire une extension ?",
        answer: `<p>De nos jours, les contraintes les plus importantes pour pouvoir construire sur un terrain sont les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle.. La configuration de la construction existante est aussi déterminante pour savoir si un agrandissement peut être réalisé. Prenez contact avec nous pour que nous parlions du projet ! Dans certains cas, une étude de faisabilité peut être nécessaire.</p>`,
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour construire une extension ?',
        answer:
          "<p>Ce n’est pas toujours obligatoire : l’agrandissement d’une maison de petite taille peut être construite par un maître d'œuvre par exemple. Mais si vous souhaitez une extension qui rende votre logement unique pour l’habiter ou pour créer une plus-value à la revente, ou plus simplement si vous voulez une maison de plus de 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>",
      },
      {
        title: 'Est-il possible de construire une extension sur deux niveaux ?',
        answer:
          '<p>Tout à fait : les extensions sur deux étages (voire plus !) ne sont pas fréquentes mais peuvent être étudiées. Dans ce cas, la jonction avec les pièces existantes et l’emplacement de l’escalier seront des paramètres importants du projet.</p>',
      },
    ],
  }),
  'renovation-maison': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content:
          'À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, compte-tenu de l’existant ; </li> <li class="pb-min"> Ce que vous avez le droit de faire : si vous souhaitez intervenir sur la façade, des autorisations sont nécessaires. Si vous êtes en copropriété, d’autres démarches pourraient être obligatoires ; </li> <li class="pb-min"> Quel est votre budget : le coût de la rénovation, en France, commence aux alentours de 1000€ TTC par mètre carré chauffé. Et peut être supérieur si vous envisagez de changer des fenêtres, d’isoler ou de refaire le système de chauffage… </li> </ul>Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses rénovations de toutes sortes et aidé à la définition d’enveloppes budgétaires.',
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon professionnel pour votre projet de rénovation de maison. Il y a 7 familles de critères à prendre en compte pour choisir un architecte pour rénover sa maison : Il existe 7 familles de critères à prendre en compte pour choisir un architecte pour construire un immeuble : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour rénover votre maison, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et si besoin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix des travaux, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois la DP ou le PC obtenu et affiché (le cas échéant), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ou la Déclaration préalable ne soit purgés, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer le chantier',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant les travaux se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Aménagement intérieur avec un architecte',
        text: 'Même s’il existe deux professions, celle d’architecte et celle d’architecte d’intérieur, la plupart des architectes “tout court” sont formés à l’architecture d’intérieur et réalisent souvent des rénovations de logements, qu’il s’agisse de maisons individuelles ou d’appartements. L’accompagnement par un professionnel a plusieurs avantages : au-delà de sa créativité, il a une bonne connaissance technique, maîtrise les budgets et les délais, et saura coordonner les artisans qui réaliseront les travaux.',
        image: {
          url: 'amenagement-maison-interieur.jpg',
          alt: 'Réaménagement d’une maison par des architectes d’intérieur',
        },
      },
      {
        title: 'Rénovation d’une maison ancienne',
        text: `À ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        } et d’ailleurs comme partout en France, de nombreux biens anciens sont en attente de rénovation. Travailler avec un architecte prend tout son sens dans une approche patrimoniale. L’agence d’architecture saura à la fois concevoir un projet qui respectera les parties à conserver, et “créer du neuf” confortable à vivre. Le cabinet d’architecte saura aussi dialoguer avec l’Architecte des Bâtiments de France si c’est nécessaire. Certains projets particulièrement ambitieux sont particulièrement prisés des architectes : rénovation de maisons en pierre, de longères, de châteaux, et en règle générale de tout élément architectural atypique, y compris les Monuments Historiques ou bâtiments remarquables !`,
        image: {
          url: 'renovation-maison-ancienne.jpg',
          alt: 'Restructuration lourde d’une longère par un architecte',
        },
      },
      {
        title: 'Aménagement extérieur',
        text: `La rénovation d’une façade (ou sa modification), l’aménagement d’un jardin, de circulations extérieures ou même d’un carport ou d’un atelier sont tout à fait dans les cordes de certains architectes. Quelques beaux exemples sont visibles notamment à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. Les architectes travaillent aussi à la conception de piscines, de terrasses et d’autres éléments d’agrément.`,
        image: {
          url: 'renovation-maison-ravalement-facade.jpg',
          alt: 'Un jardin et une maison rénovés par un architecte',
        },
      },
      {
        title: 'Aménager un garage ou des combles en espace de vie',
        text: 'Pour gagner des mètres carrés, créer de nouvelles pièces et améliorer votre quotidien, exploiter la surface d’un garage, le volume sous un toit ou convertir un appentis en une pièce à vivre peut être une bonne solution. C’est une façon de s’agrandir avec des frais limités, et permet accessoirement de faire prendre de la valeur à votre bien immobilier. L’architecte est le bon interlocuteur pour ce type de projet : il saura faire dialoguer les parties existantes et les “nouvelles” et trouver des solutions techniques pour exploiter chaque opportunité.',
        image: {
          url: 'renovation-maison-amenagement-combles.jpg',
          alt: 'Ces combles aménagées ont permis de créer deux chambres supplémentaires',
        },
      },
    ],
    listTitle: `Les différents projets d’aménagements de maison ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour rénover et aménager votre maison ${depPrefix} ${department}`,
      'Quelques rénovations de maisons réalisées par nos architectes à proximité',
    ],
    blog: {
      image: 'renovation-maison-blog.jpg',
      imageAlt: "Rénovation d'une longère près de Nantes",
      url: 'https://blog.archibien.com/renovation-nantes-longere/',
      quote: 'Cette longère, achetée dans son jus, est devenue une demeure de charme !',
      author: 'Joséphine et Martin',
    },
    questions: [
      {
        title: 'Combien coûte la rénovation d’une maison ?',
        answer: `<p>Quel est le prix au mètre carré d’une rénovation ? Quel budget pour un aménagement de maison ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une rénovation ${depPrefix} ${department} pour moins de 1000 € TTC par mètre carré. Cette somme comprend le coût des travaux et les honoraires de l’architecte. Néanmoins, si vous envisagez aussi de faire des modifications structurelles, de changer l’isolation, le système de chauffage ou de remplacer les fenêtres, le budget grimpe rapidement. </p> <p> Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par un “simple” maître d’oeuvre, non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par un maître d’oeuvre. </p>`,
      },
      {
        title:
          'Est-il nécessaire de travailler avec un architecte ou un architecte d’intérieur pour rénover son logement ?',
        answer:
          '<p>Il existe certains cas (notamment dans le cas de création de surface pour une maison qui comprendrait déjà plus de 150m²) où il est obligatoire de travailler avec un architecte pour certaines missions ; mais c’est souvent plutôt un choix qu’une obligation réglementaire : travailler avec une agence d’architecture vous permettra d’avoir un logement de qualité, de charme, et souvent même de créer une plus-value pour votre maison, si vous deviez la revendre dans le futur.</p>',
      },
    ],
  }),
  'renovation-appartement': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content:
          'À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, compte-tenu de l’existant ; </li> <li class="pb-min"> Ce que vous avez le droit de faire : si vous souhaitez intervenir sur la façade, des autorisations sont nécessaires. Si vous êtes en copropriété, d’autres démarches pourraient être obligatoires ; </li> <li class="pb-min"> Quel est votre budget : le coût de la rénovation, en France, commence aux alentours de 1000€ TTC par mètre carré chauffé. Et peut être supérieur si vous envisagez de changer des fenêtres, d’isoler ou de refaire le système de chauffage… </li> </ul>Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses rénovations de toutes sortes et aidé à la définition d’enveloppes budgétaires.',
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon professionnel pour votre projet de rénovation d’appartement. Il y a 7 familles de critères à prendre en compte pour choisir un architecte pour rénover son appartement : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et si besoin réaliser les démarches administratives pour mener à bien les travaux. Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix des travaux, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'L’architecte poursuit ensuite le travail sur le projet, en dessinant plus finement encore : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer le chantier',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant les travaux se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été fait pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Rénovation intérieure avec un architecte',
        text: 'Même s’il existe deux professions, celle d’architecte et celle d’architecte d’intérieur, la plupart des architectes “tout court” sont formés à l’architecture d’intérieur et réalisent souvent des rénovations de logements, qu’il s’agisse de maisons individuelles ou d’appartements. L’accompagnement par un professionnel a plusieurs avantages : au-delà de sa créativité, il a une bonne connaissance technique, maîtrise les budgets et les délais, et saura coordonner les artisans qui réaliseront les travaux. L’architecte est aussi le spécialiste de l’optimisation des espaces : organiser et trouver des mètres carrés cachés est sa spécialité.',
        image: {
          url: 'renovation-appartement.jpg',
          alt: 'Restructuration lourde d’un appartement début de siècle',
        },
      },
      {
        title: 'Aménagement de combles',
        text: 'Pour gagner des mètres carrés, créer de nouvelles pièces et améliorer votre quotidien, exploiter le volume sous un toit est souvent une bonne solution. C’est une façon de s’agrandir sans déménager, et permet accessoirement de faire prendre de la valeur à votre bien immobilier : les duplex sont très cotés ! L’architecte est le bon interlocuteur pour ce type de projet : il saura faire dialoguer les parties existantes et les “nouvelles” et trouver des solutions techniques pour exploiter chaque opportunité, en s’assurant de rester dans un cadre légal validé si vous êtes en copropriété.',
        image: {
          url: 'renovation-appartement-duplex.jpg',
          alt: 'Ces combles aménagées ont permis de créer deux chambres supplémentaires',
        },
      },
      {
        title: 'Décoration d’un appartement',
        text: 'Les missions confiées à un architecte ou architecte d’intérieur peuvent être cantonnées à la configuration des pièces et aux éléments techniques, mais aussi porter sur des éléments d’aménagement et de décoration : nos agences d’architecture sauront dessiner la cuisine de vos rêves, la bibliothèque sur-mesure qui contiendra tous vos objets chers, et les rangements vastes dont vous parlez depuis longtemps. Le choix des matériaux, mobiliers, accessoires de décoration, couverts et autres éléments peut aussi être confié à l’architecte.',
        image: {
          url: 'renovation-appartement-decoration.jpg',
          alt: 'Cuisine créée et décorée par un architecte d’intérieur',
        },
      },
      {
        title: 'Rénovation d’éléments anciens',
        text: `À ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        } et d’ailleurs comme partout en France, de nombreux biens comportent des éléments anciens qui méritent d’être restaurés ou mis en valeur. Travailler avec un architecte prend tout son sens dans une approche patrimoniale. L’agence d’architecture saura à la fois concevoir un projet qui respectera les parties à conserver, et “créer du neuf” confortable à vivre. Certains projets particulièrement ambitieux sont particulièrement prisés des architectes : rénovation d’appartements dans des bâtiments anciens, et en règle générale tout élément architectural atypique, y compris les Monuments Historiques ou bâtiments remarquables !`,
        image: {
          url: 'renovation-appartement-ancien.jpg',
          alt: 'Transformation d’un appartement haussmanien en bureaux',
        },
      },
    ],
    listTitle: `Les différents projets d’aménagements d’appartements ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour rénover et aménager votre appartement ${depPrefix} ${department}`,
      'Quelques rénovations d’appartements réalisés par nos architectes à proximité',
    ],
    blog: {
      image: 'renovation-appartement-blog.jpg',
      imageAlt: "Rénovation d'un appartement",
      url: 'https://blog.archibien.com/optimiser-les-combles-pour-offrir-un-nouvel-espace-de-vie/',
      quote: 'Annexer les combles nous a offert un nouvel espace de vie !',
      author: 'Sam’ et Karim',
    },
    questions: [
      {
        title: 'Combien coûte la rénovation d’un appartement ?',
        answer: `<p>Quel est le prix au mètre carré d’une rénovation ? Quel budget pour l’aménagement complet d’un appartement ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une rénovation ${depPrefix} ${department} pour moins de 1000 € TTC par mètre carré. Cette somme comprend le coût des travaux et les honoraires de l’architecte. Néanmoins, si vous envisagez aussi de faire des modifications structurelles, de changer l’isolation, le système de chauffage ou de remplacer les fenêtres, le budget grimpe rapidement. </p> <p> Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par des artisans gérés en direct : non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par des artisans qui ont chacun leurs spécialités. </p>`,
      },
      {
        title:
          'Est-il nécessaire de travailler avec un architecte ou un architecte d’intérieur pour rénover son appartement ?',
        answer:
          '<p>Il existe certains cas où il est obligatoire de travailler avec un architecte pour quelques missions ; mais c’est souvent plutôt un choix qu’une obligation réglementaire : travailler avec une agence d’architecture vous permettra d’avoir un logement de qualité, de charme, et souvent même de créer une plus-value pour votre appartement, si vous deviez le revendre dans le futur.</p>',
      },
    ],
  }),
  'surelevation-maison': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : usage, surface, nombre de pièces, stationnements à prendre en compte, espaces extérieurs ou non, style, matériaux, performances énergétiques… </li> <li class="pb-min"> L’endroit où vous souhaitez construire : êtes-vous déjà propriétaire d’un terrain ? Quelles sont ses caractéristiques ? </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France ou “ABF”) encadrent les possibilités de surélévation et d’agrandissement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes et se superposent, et certains éléments doivent être négociés, notamment à ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        }. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’une surélévation, en France, commence aux alentours de 2400€ TTC par mètre carré chauffé. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses surélévations de maisons sur des parcelles de toutes sortes, étudié les contraintes d’urbanisme applicables dans des contextes variés, et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de surélévation. Il y a 7 familles de critères à prendre en compte pour choisir un architecte : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour agrandir votre logement, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois la DP ou le PC obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore la surélévation : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ou la Déclaration préalable ne soit purgés, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la surélévation',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de la surélévation de maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Surélévation en bois',
        text: `Le bois est souvent utilisé pour les projets de surélévation ou d’extensions, et ce n’est pas pour rien : plus écologique et rapide à construire, il a l’indéniable avantage d’être plus léger que de la maçonnerie, et donc d’éviter dans certains cas des renforts de la structure de la maison ou du garage. Plusieurs techniques de construction existent et nous pourrons vous aider à déterminer la méthode la plus appropriée : murs en ossature bois préfabriqués ou construits sur place, panneaux en bois lamellé croisé (CLT)… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, ${depPrefix} ${department} bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'surelevation-maison-bois.jpg',
          alt: 'Surélévation de maison avec un bardage en bois, faite par un architecte',
        },
      },
      {
        title: 'Surélévation moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour des formes simples ont donné lieu à des constructions avec des volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez une surélévation avec de grandes ouvertures, une toiture plate, des volumes atypiques (et bien sûr des espaces de vie agréables), l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'surelevation-maison-moderne.jpg',
          alt: 'Réhausse de toiture en zinc par un architecte',
        },
      },
      {
        title: 'Surélévation dans le style de l’existant',
        text: "La surélévation de votre garage ou de votre maison peut tout à fait être dans un style conforme à ce qui existe déjà : votre logement agrandi donnera l’impression d’avoir toujours été là. Il arrive parfois que les UDAP (Unités Départementales de l'Architecture et du Patrimoine) imposent la conservation de formes architecturales et de matériaux existants. Dans tous les cas, une étude fine des matériaux et de la structure de la maison devra permettre de préciser le projet architectural.",
        image: {
          url: 'surelevation-maison-traditionnelle.jpg',
          alt: 'Bâtiments anciens serrés les uns contre les autres au fond d’une cour, avant/après',
        },
      },
      {
        title: 'Surélévation pour créer un rooftop',
        text: 'Contrairement aux idées reçues, les toits plats sont très fiables et donnent un look moderne indéniable à toute construction. En plus d’être une solution technique qui permet en général un chantier rapide, une toiture terrasse permet, quand c’est possible, de créer un rooftop : un espace extérieur sur le toit. Quoi de mieux que de pouvoir prendre un bain de soleil sur son toit, d’avoir un potager ou un jardin suspendu, d’organiser un apéritif avec vue ?',
        image: {
          url: 'surelevation-maison-terrasse.jpg',
          alt: 'Vue de la terrasse sur le toit d’une maison depuis la rue',
        },
      },
    ],
    listTitle: `Les différents styles de surélévations ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre surélévation ${depPrefix} ${department}`,
      'Quelques surélévations de maisons ou de garages réalisés par nos architectes à proximité',
    ],
    blog: {
      image: 'surelevation-maison-blog.jpg',
      imageAlt: "Surélévation d'immeuble à Paris",
      url: 'https://blog.archibien.com/surelevation-immeuble-paris-architecte/',
      quote: 'Nous avons créé deux chambres supplémentaires !',
      author: 'Guillaume et Alexandra',
    },
    questions: [
      {
        title: 'Combien coûte une surélévation ?',
        answer: `<p>Quel est le prix au mètre carré d’une surélévation faite par un architecte ? Quel budget tout compris pour une surélévation ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une surélévation ${depPrefix} ${department} pour moins de 2400 € TTC par mètre carré chauffé. Cette somme comprend le coût des travaux et les honoraires de l’architecte, mais pas les interventions sur l’existant, qui sont souvent nécessaires. En règle générale, il est recommandé de prévoir un budget supérieur, notamment pour se prémunir des variations de coûts de matériaux et des artisans, qui pèsent énormément sur l’enveloppe totale. </p> <p>Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par un “simple” maître d’oeuvre, non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par un maître d’oeuvre. </p>`,
      },
      {
        title: "Comment savoir s'il est possible de faire une surélévation ?",
        answer: `<p>Il y a deux grandes contraintes aux projets de réhausse de bâtiments : D’abord les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Mais aussi la façon dont la maison ou le garage existant est construit : pouvoir ajouter un ou plusieurs niveaux et les charges (le poids) correspondant n’est pas automatique. La configuration de la construction existante est aussi déterminante pour savoir si une surélévation peut être réalisée. Prenez contact avec nous pour que nous parlions du projet ! Dans certains cas, une étude de faisabilité peut être nécessaire.</p`,
      },
      {
        title:
          'Est-il nécessaire de travailler avec un architecte pour réaliser une surélévation ?',
        answer:
          '<p>Ce n’est pas toujours obligatoire, mais comme les surélévations supposent des compétences variées et la coordination de différents professionnels (bureaux d’étude, service d’urbanisme de la ville, entreprises…), le recours à un architecte est souvent recommandé. Et si vous souhaitez une extension qui rende votre logement unique pour l’habiter ou pour créer une plus-value à la revente, ou plus simplement si vous voulez une maison de plus de 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>',
      },
      {
        title: 'Quelle est la différence entre une réhausse de toiture et une surélévation ?',
        answer:
          '<p>Réhausser la toiture consiste à modifier la forme de la toiture existante, pour créer plus de surface et de volume à l’intérieur : par exemple pour transformer une toiture à deux pans en une toiture mansardée, ce qui permettra d’avoir de vraies fenêtres à l’intérieur. Plus simple encore qu’une réhausse (ou parfois en complément), créer des fenêtres de toit (couramment appelées Velux®, mais c’est une marque déposée) ou des chiens assis permet aussi d’aménager des combles et d’en profiter.</p>',
      },
    ],
  }),
  'surelevation-immeuble': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, en relation avec l’existant : la surélévation doit se baser sur des éléments existants ; </li> <li class="pb-min"> Ce que l’on vous autorisera à faire : si vous êtes en copropriété, les copropriétaires devront donner leur accord ; </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France, ou “ABF”) encadrent les possibilités de surélévation ou d'agrandissement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes, se superposent, et certains éléments doivent être négociés, notamment à ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        }. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’une surélévation, en France, commence aux alentours de 2800€ TTC par mètre carré chauffé. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur des surélévations d’immeubles très différents, étudié les contraintes d’urbanisme applicables dans des contextes variés, et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de surélévation. Il y a 7 familles de critères à prendre en compte pour choisir un architecte : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour agrandir votre logement, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois la DP ou le PC obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore la surélévation : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ou la Déclaration préalable ne soit purgés, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la surélévation',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de la surélévation de maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème. L’architecte interviendra aussi pour la mise à jour du règlement de copropriété et des tantièmes, qui supposera l’intervention d’un géomètre et le passage chez un notaire.",
      },
    ],
    list: [
      {
        title: 'Surélévation en bois',
        text: `Le bois est souvent utilisé pour les projets de surélévation ou d’extensions, et ce n’est pas pour rien : plus écologique et rapide à construire, il a l’indéniable avantage d’être plus léger que de la maçonnerie, et donc d’éviter dans certains cas des renforts de la structure de la maison ou du garage. Plusieurs techniques de construction existent et nous pourrons vous aider à déterminer la méthode la plus appropriée : murs en ossature bois préfabriqués ou construits sur place, panneaux en bois lamellé croisé (CLT)… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, ${depPrefix} ${department}, bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'surelevation-immeuble-bois.jpg',
          alt: 'Surélévation d’immeuble passif avec un bardage en bois, faite par un architecte',
        },
      },
      {
        title: 'Surélévation moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour des formes simples ont donné lieu à des constructions avec des volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez une surélévation avec de grandes ouvertures, une toiture plate, des volumes atypiques (et bien sûr des espaces de vie agréables), l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'surelevation-immeuble-moderne.jpg',
          alt: 'Vue sur les derniers étages d’un immeuble surélevé avec de grandes terrasses',
        },
      },
      {
        title: 'Surélévation dans le style de l’existant',
        text: "La surélévation de votre immeuble peut tout à fait être dans un style conforme à ce qui existe déjà : le ou les étages supplémentaires donneront l’impression d’avoir toujours été là. Il arrive parfois que les UDAP (Unités Départementales de l'Architecture et du Patrimoine) imposent la conservation de formes architecturales et de matériaux existants. Dans tous les cas, une étude fine des matériaux et de la structure de la maison devra permettre de préciser le projet architectural.",
        image: {
          url: 'surelevation-immeuble-monument-historique.jpg',
          alt: 'Immeuble ancien remarquable avec surélévation sur le toit',
        },
      },
      {
        title: 'Surélévation pour créer un rooftop',
        text: 'Contrairement aux idées reçues, les toits plats sont très fiables et donnent un look moderne indéniable à toute construction. En plus d’être une solution technique qui permet en général un chantier rapide, une toiture terrasse permet, quand c’est possible, de créer un rooftop : un espace extérieur sur le toit. Quoi de mieux que de pouvoir prendre un bain de soleil sur son toit, d’avoir un potager ou un jardin suspendu, d’organiser un apéritif avec vue ?',
        image: {
          url: 'surelevation-immeuble-terrasse.jpg',
          alt: 'Illustration d’une terrasse en toit donnant des vues sur la ville et la mer au loin',
        },
      },
    ],
    listTitle: `Les différents styles de surélévations d’immeubles ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre surélévation d’immeuble ${depPrefix} ${department}`,
      'Quelques surélévations d’immeubles réalisés par nos architectes à proximité',
    ],
    blog: {
      image: 'surelevation-maison-blog.jpg',
      imageAlt: "Surélévation d'un immeuble à Paris",
      url: 'https://blog.archibien.com/surelevation-immeuble-paris-architecte/',
      quote: 'Surélever les combles de l’immeuble nous a permis de créer un petit duplex !',
      author: 'Guillaume et Alexandra',
    },
    questions: [
      {
        title: "Combien coûte une surélévation d'immeuble ?",
        answer: `<p>Quel est le prix au mètre carré d’une surélévation faite par un architecte ? Quel budget tout compris pour une surélévation ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une surélévation ${depPrefix} ${department} pour moins de 2800 € TTC par mètre carré chauffé. Cette somme comprend le coût des travaux et les honoraires de l’architecte, mais pas les interventions sur l’existant, qui sont souvent nécessaires. En règle générale, il est recommandé de prévoir un budget supérieur, notamment pour se prémunir des variations de coûts de matériaux et des artisans, qui pèsent énormément sur l’enveloppe totale. </p> <p>Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par un “simple” maître d’oeuvre, non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par un maître d’oeuvre. </p>`,
      },
      {
        title: "Comment savoir s'il est possible de faire une surélévation ?",
        answer: `<p>Il y a trois grandes contraintes aux projets de réhausse de bâtiments : D’abord les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Mais aussi la façon dont l’immeuble existant est construit : pouvoir ajouter un ou plusieurs niveaux et les charges (le poids) correspondant n’est pas automatique. D’autre part, les immeubles sont souvent en copropriété, et l’accord des voisins est indispensable. Enfin, la configuration de la construction existante est aussi déterminante pour savoir si une surélévation peut être réalisée. Prenez contact avec nous pour que nous parlions du projet ! Dans certains cas, une étude de faisabilité peut être nécessaire.</p>`,
      },
      {
        title:
          'Est-il nécessaire de travailler avec un architecte pour réaliser une surélévation ?',
        answer:
          '<p>Comme les surélévations supposent des compétences variées et la coordination de différents professionnels (bureaux d’étude, service d’urbanisme de la ville, entreprises…), ainsi que la discussion avec des copropriétaires et leur syndic, le recours à un architecte est souvent recommandé. D’autre part, si après le projet le bâtiment dépasse 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>',
      },
      {
        title: 'Quelle est la différence entre une réhausse de toiture et une surélévation ?',
        answer:
          '<p>Réhausser la toiture consiste à modifier la forme de la toiture existante, pour créer plus de surface et de volume à l’intérieur : par exemple pour transformer une toiture à deux pans en une toiture mansardée, ce qui permettra d’avoir de vraies fenêtres à l’intérieur. Plus simple encore qu’une réhausse (ou parfois en complément), créer des fenêtres de toit (couramment appelées Velux®, mais c’est une marque déposée) ou des chiens assis permet aussi d’aménager des combles et d’en profiter. La réhausse est une solution souvent plus facile à mettre en oeuvre qu’une surélévation.</p>',
      },
      {
        title:
          'Quelles sont les autorisations à obtenir pour surélever les combles d’un immeuble en copropriété ?',
        answer:
          '<p>Il y a (au moins) trois familles de contraintes à prendre en compte pour surélever un immeuble en copropriété : <ul> <li class="pb-min"> La copropriété en elle-même, à laquelle il faut acheter des droits à construire et qui doit valider le projet dans ses moindres détails (à part les aménagements intérieurs des parties privatives) ; </li> <li class="pb-min"> Les règles d’urbanisme, qui sont multiples de nos jours, et peuvent contraindre par exemple à ajouter des stationnements à l’immeuble ou à créer un local poubelle ; </li> <li class="pb-min"> Les contraintes techniques, liées aux sous-sols, au sol, aux fondations, à la structure de l’immeuble, à la partie qui serait créée, à la résistance au feu, à l’accessibilité PMR, etc. </li></ul> La meilleure solution est sans doute d’en discuter pour les recenser ! </p>',
      },
      {
        title: 'Faut-il avoir un architecte d’immeuble ?',
        answer:
          '<p>La majorité des immeubles en France n’ont pas “d’architecte d’immeuble”. Et même si celui-ci est censé connaître les caractéristiques et l’historique d’un bâtiment donné, ce n’est pas souvent l’architecte de l’immeuble qui conduit le projet de surélévation, car le donneur d’ordre, qui est souvent un des copropriétaires, se fait accompagner en tant que maître d’ouvrage par un cabinet d’architecte indépendant. L’architecte d’immeuble peut avoir dans ce cas un rôle de contrôle.</p>',
      },
    ],
  }),
  'construction-immeuble': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : usage, surface, nombre de pièces, stationnements à prendre en compte, espaces extérieurs ou non, style, matériaux, performances énergétiques… </li> <li class="pb-min"> L’endroit où vous souhaitez construire : êtes-vous déjà propriétaire d’un terrain ? Quelles sont ses caractéristiques ? </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France, ou “ABF”) encadrent les possibilités de construction ou d’aménagement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes, se superposent, et certains éléments doivent être négociés, notamment à ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        }. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’un bâtiment, en France, commence aux alentours de 1500€ HT par mètre carré chauffé : pour des commerces, locaux industriels ou artisanaux, les prix peuvent être plus bas. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreux projets sur des terrains de toutes sortes étudié les contraintes d’urbanisme applicables dans des contextes variés (en centre-ville, hameau, au bord de l’eau…), et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de construction de bâtiment. Il existe 7 familles de critères à prendre en compte pour choisir un architecte pour construire un immeuble : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour réaliser votre immeuble, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux.<br> Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois le Permis de Construire obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore le bâtiment : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). <br> Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ne soit purgé, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer le bâtiment',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans et les bureaux d’étude, veiller à ce que tout soit réalisé dans les règles de l’art ne s’improvise pas. L’architecte, qui en dessinant les plans et en suivant la construction se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez exploiter le bâtiment sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Construction d’immeubles de logements collectifs',
        text: 'Comment optimiser un projet de construction d’immeuble de logements ? Que vous ayez une logique de foncière (et restiez propriétaires des logements loués) ou de promoteur immobilier (en vendant les appartements une fois livrés), passer par Archibien vous permettra d’optimiser votre opération : vous pourrez fixer les critères de réussite, comme la création de mètres carrés supplémentaires, la qualité des espaces et de la construction, la performance énergétique du bâtiment ou son bilan carbone… Nos architectes aiment les projets aux contraintes multiples : PLUs complexes, secteurs protégés, parcelles atypiques, programmes atypiques…',
        image: {
          url: 'construction-immeuble-collectif.jpg',
          alt: 'Logements collectifs avec terrasse construits sur une parcelle étroite',
        },
      },
      {
        title: 'Construction de bureaux et de sièges sociaux',
        text: `Dans les grandes villes du département (${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }) comme dans les plus petites, les entreprises cherchent à se distinguer par l’architecture de leurs bureaux ou de leur siège social. Les architectes vous permettront de créer des lieux qui seront à la fois pratiques au quotidien, qui reflèteront votre image de marque et de créer un patrimoine pour les propriétaires des bâtiments. Nous avons accompagné des projets de bureaux, de centres de recherche, et des projets de bureaux à vocation plus industrielle, avec des ateliers et espaces de stockage.`,
        image: {
          url: 'construction-immeuble-siege-social.jpg',
          alt: 'Siège social réalisé par un architecte comprenant des bureaux',
        },
      },
      {
        title: 'Construction de maison de santé ou d’établissement médical',
        text: 'Les établissements de soins médicaux ou paramédicaux réunissent des enjeux particuliers : d’exploitation continue, d’hygiène, de confort, de sécurité et de durabilité. Que votre projet concerne un cabinet médical, une maison de santé, ou une échelle plus importante comme un EPHAD, nous saurons vous recommander le bon architecte pour prendre en charge la conception et la construction du bâtiment.',
        image: {
          url: 'construction-immeuble-sante.jpg',
          alt: 'Construction d’une maison de santé avec des chambres et des lits médicaux',
        },
      },
      {
        title: 'Construction de bâtiment industriel',
        text: `Un architecte, associé à des bureaux d’études spécialisés, est souvent indispensable dans un projet de construction d’une usine, d’un atelier de fabrication ou de transformation ou de laboratoire ou même de centre logistique. En ${depPrefix} ${department}, nos architectes pourront vous accompagner : prenons contact !`,
        image: {
          url: 'construction-immeuble-usine.jpg',
          alt: 'Usine métallique avec une architecture moderne et des formes rondes',
        },
      },
      {
        title: 'Construction de locaux commerciaux',
        text: 'Que vous souhaitiez construire un centre commercial ou un local commercial indépendant, aménager une cellule ou réaliser une boutique flagship (voire un magasin éphémère), une agence d’architecture sera le bon interlocuteur pour vous : pour maîtriser les coûts, les délais et pour réaliser un projet à votre image.',
        image: {
          url: 'construction-immeuble-commercial.jpg',
          alt: 'Coques commerciales en rez-de-chaussée dans un bâtiment neuf à l’architecture contemporaine',
        },
      },
      {
        title: 'Construction d’établissements d’enseignement',
        text: 'Les locaux destinés à l’éducation, du plus jeune âge (crèche) à l’enseignement supérieur (bâtiments destinés à la recherche) supposent l’intervention d’architectes : pour des plans d’ensemble fonctionnels et durables, pour un suivi de chantier professionnel et pour une maîtrise des prix et le suivi des devis des entreprises de travaux.',
        image: {
          url: 'construction-immeuble-enseignement.jpg',
          alt: 'Salles de cours et laboratoires d’enseignement dans une école privée',
        },
      },
    ],
    listTitle: `Quelques types de bâtiments à construire avec un architecte ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre bâtiment ${depPrefix} ${department}`,
      `Quelques types de bâtiments à construire avec un architecte ${depPrefix} ${department}`,
    ],
    blog: {
      image: 'construction-immeuble-blog.jpg',
      imageAlt: "aménagement d'un bureau à Issy-les-moulineaux",
      url: 'https://blog.archibien.com/amenagement-de-bureaux-ou-comment-reinventer-les-espaces-de-travail/',
      quote: 'Nos nouveaux bureaux nous permettent de mieux travailler !',
      author: 'Benjamin, Icade',
    },
    questions: [
      {
        title: 'Combien coûte un bâtiment construit par un architecte ?',
        answer: `<p>Quel est le prix au mètre carré d’un immeuble construit par un architecte ? Quel budget tout compris pour construire un bâtiment industriel, commercial, d’enseignement ou de soin ? Nous avons souvent à répondre à ces questions. Même si le prix dépend beaucoup du projet et des matériaux mis en oeuvre, il est difficile d’envisager une construction ${depPrefix} ${department} pour moins de 1500 € HT par mètre carré chauffé de bureau. Mais des locaux industriels peuvent avoir des prix qui commencent à quelques centaines d’euros par mètre carré… </p>`,
      },
      {
        title: 'Faut-il trouver le terrain avant de commencer à travailler avec un architecte ?',
        answer: `<p>De nos jours, les contraintes les plus importantes pour pouvoir construire sur un terrain sont les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Aussi, concevoir un bâtiment avant de connaître l’endroit où il sera implanté n’est pas recommandé. Lors de votre recherche de terrain, n’hésitez pas à nous solliciter : Archibien peut vous aider à déterminer le potentiel de constructibilité d’une parcelle.</p>`,
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour construire un bâtiment ?',
        answer:
          '<p>Au delà de “tous petits projets” (que nous aurons plaisir à traiter néanmoins), l’intervention d’une agence d’architecture, même si elle se cantonne à la conception et aux démarches administratives, est souvent nécessaire.</p>',
      },
      {
        title: 'Est-ce plus cher de construire avec un architecte ?',
        answer:
          '<p>La réponse n’est pas simple. Les bâtiments qui ne sont pas construits par des architectes sont souvent des immeubles standards, “réplicables”, avec des matériaux et des performances basiques - ils ont donc souvent un prix de revient modéré, où les constructeurs dégagent néanmoins des marges confortables. De l’autre côté, les bâtiments demandés aux architectes peuvent aller d’un immeuble de logement minimaliste et sobre à des laboratoires ultra-complexes - les prix varient donc beaucoup. En réalité, ce n’est pas le fait de travailler avec un architecte qui rend la construction plus chère, c’est plutôt que les bâtiments demandés aux architectes sont souvent plus élaborés et donc plus coûteux. Mais représentent sans aucun doute un investissement rentable pour le long terme !</p>',
      },
    ],
  }),
  'renovation-immeuble': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content:
          'À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, compte-tenu de l’existant ; </li> <li class="pb-min"> Ce que vous avez le droit de faire : si vous souhaitez intervenir sur la façade, des autorisations sont nécessaires. Si vous êtes en copropriété, d’autres démarches pourraient être obligatoires ; </li> <li class="pb-min"> Quel est votre budget ; </li> </ul> Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses rénovations de toutes sortes et aidé à la définition d’enveloppes budgétaires.',
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon professionnel pour votre projet de rénovation. Il y a 7 familles de critères à prendre en compte pour choisir un architecte pour rénover un immeuble : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et si besoin réaliser les démarches administratives pour mener à bien les travaux.<br> Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix des travaux, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'L’architecte poursuit ensuite le travail sur le projet, en dessinant plus finement encore : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer le bâtiment',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art ne s’improvise pas. L’agence d’architecture, qui en dessinant les plans et en suivant les travaux se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été fait pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.",
      },
    ],
    list: [
      {
        title: 'Rénovation d’immeuble avec un architecte',
        text: `Même s’il existe deux professions, celle d’architecte et celle d’architecte d’intérieur, la plupart des architectes “tout court” sont formés à l’architecture d’intérieur et réalisent souvent des rénovations d’immeubles, notamment à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’accompagnement par un professionnel a plusieurs avantages : au-delà de sa créativité, il a une bonne connaissance technique, maîtrise les budgets et les délais, et saura coordonner les entreprises qui réaliseront les travaux. L’architecte est aussi le spécialiste de l’optimisation des espaces : organiser et trouver des mètres carrés cachés est sa spécialité. Pour une copropriété, un syndic ou un gestionnaire d’immeuble, l’architecte est donc le bon interlocuteur pour une rénovation, quelle que soit son ampleur.`,
        image: {
          url: 'renovation-immeuble-escalier.jpg',
          alt: 'Escalier monumental rénové par un architecte dans un immeuble de bureaux',
        },
      },
      {
        title: 'Transformation d’espaces',
        text: 'Pour gagner des mètres carrés, créer de nouveaux locaux ou en étendre, exploiter autrement des surfaces existantes ou des volumes peut être une solution, quand c’est possible. C’est une façon de répondre aux besoins des usagers d’un bâtiment et cela permet en outre de faire prendre de la valeur au bien que vous gérez. L’architecte est le bon interlocuteur pour ce type de projet : il saura faire dialoguer les parties existantes et les “nouvelles” et trouver des solutions techniques pour exploiter chaque opportunité, en s’assurant de rester dans un cadre légal valide si vous êtes en copropriété.',
        image: {
          url: 'renovation-immeuble-espace.jpg',
          alt: 'Un ancien atelier converti en un restaurant dans un immeuble',
        },
      },
      {
        title: 'Ravalement de façade',
        text: `Les missions confiées à un architecte ne se cantonnent pas à la configuration des pièces et aux choix des matériaux. Les architectes sont compétents sur les sujets plus techniques : dans le cas de copropriétés en centres anciens par exemple (comme à ${cities[0]}), les architectes entretiennent les copropriétés et supervisent les travaux de ravalement de façade. Consultez-nous pour obtenir un devis pour la gestion d’un ravalement de façade par un ou plusieurs architectes spécialisés.`,
        image: {
          url: 'renovation-immeuble-facade.jpg',
          alt: 'Ravalement de façade en centre ancien par un architecte',
        },
      },
      {
        title: 'Travaux de rénovation d’éléments anciens',
        text: `À ${
          cities.length > 1 ? cities.join(', ') : cities[0]
        }, et d’ailleurs comme partout en France, de nombreux biens comportent des éléments anciens qui méritent d’être restaurés ou mis en valeur. Travailler avec un architecte prend tout son sens dans une approche patrimoniale. L’agence d’architecture saura à la fois concevoir un projet qui respectera les parties à conserver, et “créer du neuf” confortable à vivre. Certains projets particulièrement ambitieux sont particulièrement prisés des architectes : rénovation de locaux dans des bâtiments anciens, et en règle générale tout élément architectural atypique, y compris les Monuments Historiques ou bâtiments remarquables !`,
        image: {
          url: 'renovation-immeuble-ancien.jpg',
          alt: 'Réhabilitation d’un monument historique par un architecte',
        },
      },
    ],
    listTitle: `Les différents types de projets de rénovation de bâtiments ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour des travaux de rénovation d’un bâtiment ${depPrefix} ${department}`,
      'Quelques travaux de rénovation réalisés par nos architectes à proximité',
    ],
    blog: {
      image: 'renovation-immeuble-blog.jpg',
      imageAlt: "Rénovation d'un ancien hangar agricole en chambres d'hôtes",
      url: 'https://blog.archibien.com/transformer-renover-hangar-agricole-en-chambres-dhotes-archibien/',
      quote: 'J’ai transformé un hangar agricole en chambres d’hôtes !',
      author: 'Anne Quentel',
    },
    questions: [
      {
        title: 'Combien coûte la rénovation d’un immeuble ?',
        answer:
          '<p>Quel est le prix au mètre carré d’une rénovation ? Quel budget pour la rénovation complète d’un immeuble ? Nous avons souvent à répondre à ces questions. En réalité, le prix dépend beaucoup du projet et de sa mise en œuvre… Appelez-nous ou écrivez-nous, nous pourrons sans doute vous présenter des exemples concrets de budgets pour vous aider à affiner votre enveloppe.</p>',
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour rénover un immeuble ?',
        answer:
          '<p>Il existe certains cas où il est obligatoire de travailler avec un architecte pour quelques missions ; mais c’est souvent plutôt un choix qu’une obligation réglementaire : travailler avec une agence d’architecture vous permettra d’avoir des espaces de qualité, et souvent même de créer une plus-value pour le bâtiment.</p>',
      },
    ],
  }),
  'amenagement-bureau': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content:
          'À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : surface, nombre de pièces ou d’espaces, style, matériaux, performances… </li> <li class="pb-min"> Ce que vous pouvez faire, compte-tenu de l’existant ; </li> <li class="pb-min"> Ce que vous avez le droit de faire : si vous souhaitez intervenir sur la façade, des autorisations sont nécessaires. Si vous êtes en copropriété, d’autres démarches pourraient être obligatoires ; </li> <li class="pb-min"> Quel est votre budget : le coût de la rénovation, en France, commence aux alentours de 600€ TTC par mètre carré chauffé pour des bureaux. Et peut être supérieur si vous envisagez de changer des fenêtres, d’isoler ou de refaire le système de chauffage… </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreuses rénovations de locaux professionnels et aidé à la définition d’enveloppes budgétaires.',
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon professionnel pour votre projet de rénovation ou d’aménagement de bureaux. Il y a 7 familles de critères à prendre en compte pour choisir un architecte : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et si besoin réaliser les démarches administratives pour mener à bien les travaux.<br>Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix des travaux, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'L’architecte poursuit ensuite le travail sur le projet, en dessinant plus finement encore : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). Toutes ces phases prennent du temps, qu’il ne faut pas négliger : les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la maison',
        content:
          "Le suivi de chantier, qui est une partie importante de la mission de maîtrise d'œuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art ne s’improvise pas. L’architecte, qui en dessinant les plans et en suivant les travaux se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été fait pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème",
      },
    ],
    list: [
      {
        title: 'Rénovation de bureaux avec un architecte',
        text: 'Même s’il existe deux professions, celle d’architecte et celle d’architecte d’intérieur, la plupart des architectes “tout court” sont formés à l’architecture d’intérieur et certains d’entre eux réalisent des rénovations de bureaux. L’accompagnement par un professionnel a plusieurs avantages : au-delà de sa créativité, il a une bonne connaissance technique, maîtrise les budgets et les délais, et saura coordonner les artisans qui réaliseront les travaux. L’architecte est aussi le spécialiste de l’optimisation des espaces : organiser et trouver des mètres carrés cachés est sa spécialité.',
        image: {
          url: 'amenagement-bureau-architecte.jpg',
          alt: 'Transformation radicale d’un ancien entrepôt en des bureaux ultra-modernes',
        },
      },
      {
        title: 'Changement de destination de locaux',
        text: `Dans les grandes villes du département (${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }), les mètres carrés de bureaux bien placés se font rares : parfois il faut transformer des locaux d’habitation, un ancien commerce ou même un restaurant en bureaux pour pouvoir les exploiter. Certains changements de destination sont simples à réaliser, d’autres moins, notamment dans les secteurs tendus et en copropriété. L’architecte est le bon interlocuteur pour ce type de projet : il saura trouver des solutions techniques et fonctionnelles pour exploiter chaque opportunité, en s’assurant de rester dans un cadre légal valide si vous êtes en copropriété.`,
        image: {
          url: 'amenagement-bureau-changement.jpg',
          alt: 'Des bureaux aménagés dans un appartement ancien',
        },
      },
      {
        title: 'Des bureaux à votre image de marque avec un architecte',
        text: 'Les missions confiées à un architecte ou architecte d’intérieur peuvent être cantonnées à la configuration des pièces et aux éléments techniques, mais aussi porter sur des éléments d’aménagement et de décoration : nos agences d’architecture sauront dessiner les bureaux de vos rêves, les espaces communs dont vos visiteurs se souviendront, et les rangements vastes dont vous parlez depuis longtemps. Le choix des matériaux, mobiliers, accessoires de décoration et autres éléments peut aussi être confié à l’architecte.',
        image: {
          url: 'amenagement-bureau-renovation.jpg',
          alt: 'Des bureaux aménagés dans les combles par un architecte',
        },
      },
    ],
    listTitle: `Les différents types de rénovations de bureaux ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour rénover et aménager des bureaux ${depPrefix} ${department}`,
      'Quelques aménagements de bureaux réalisés par nos architectes à proximité',
    ],
    blog: {
      image: 'amenagement-bureau-blog.jpg',
      imageAlt: 'Couloir du nouveau bureau de Stilla, rénové par Archibien',
      url: 'https://blog.archibien.com/projet-de-renovation-de-bureaux-stilla/',
      quote: 'Le projet choisi ? Une vraie vitrine de notre savoir-faire et de notre histoire.',
      author: 'Stilla',
    },
    questions: [
      {
        title: 'Combien coûte la rénovation et l’aménagement de bureaux ?',
        answer:
          '<p>Quel est le prix au mètre carré d’une rénovation ? Quel budget pour l’aménagement complet de bureaux ou de locaux ? Le plus simple est d’évoquer ensemble votre projet : il nous faut pour cela savoir si des travaux lourds de rénovation sont à faire, si le mobilier est à fournir, etc… <br> Il est aussi utile de préciser que le coût moyen d’un projet géré par un architecte est supérieur à celui d’un projet pris en charge par des artisans gérés en direct : non pas parce que l’architecte est plus cher mais parce que l’architecte travaille en général sur des projets plus complexes que ceux gérés par des artisans qui ont chacun leurs spécialités.</p>',
      },
      {
        title:
          'Est-il nécessaire de travailler avec un architecte ou un architecte d’intérieur pour rénover ses bureaux ?',
        answer:
          '<p>Il existe certains cas où il est obligatoire de travailler avec un architecte pour quelques missions ; mais dans le bas de bureaux c’est souvent plutôt un choix qu’une obligation réglementaire : travailler avec une agence d’architecture vous permettra d’avoir des bureaux de qualité, de charme, et souvent même de créer une plus-value pour les locaux, si vous deviez les revendre dans le futur.</p>',
      },
    ],
  }),
  'monument-historique': (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : usage, surface, nombre de pièces, stationnements à prendre en compte, espaces extérieurs ou non, style, matériaux, performances énergétiques… </li> <li class="pb-min"> L’endroit où vous souhaitez construire : êtes-vous déjà propriétaire d’un terrain ? Quelles sont ses caractéristiques ? </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France, ou “ABF”) encadrent les possibilités de construction ou d’aménagement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes, se superposent, et certains éléments doivent être négociés, notamment à ${cities}. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’un bâtiment, en France, commence aux alentours de 1500€ HT par mètre carré chauffé : pour des commerces, locaux industriels ou artisanaux, les prix peuvent être plus bas. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreux projets sur des terrains de toutes sortes étudié les contraintes d’urbanisme applicables dans des contextes variés (en centre-ville, hameau, au bord de l’eau…), et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de construction de bâtiment. Il existe 7 familles de critères à prendre en compte pour choisir un architecte pour construire un immeuble : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour construire votre maison, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. <br> Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois le Permis de Construire obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore la maison : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). <br> Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ne soit purgé, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la maison',
        content:
          'Le suivi de chantier, qui est une partie importante de la mission de maîtrise d’oeuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de la maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.',
      },
    ],
    list: [
      {
        title: 'Construction de maison en bois',
        text: `Les maisons en bois ont le vent en poupe, et à juste titre : plus écologiques et rapides à construire, il n’y a pas réellement de limitations techniques liées à ce mode constructif. Plusieurs méthodes de construction existent et nous pourrons vous aider à déterminer celui qui est le plus pertinent pour votre projet : maison en ossature bois préfabriquée ou construite sur place, en panneaux en bois lamellé croisé (CLT), en madriers… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, en ${department}, bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'construction-maison-bois.jpg',
          alt: "Construction d'une maison en bois par un architecte",
        },
      },
      {
        title: 'Construction de maison moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour le minimalisme ont donné lieu à des constructions avec des compositions de volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez un logement de style moderne ou contemporain avec de grandes ouvertures, une toiture plate, des volumes atypiques et des espaces de vie agréables, l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'construction-maison-moderne.jpg',
          alt: "Construction d'une maison moderne par un architecte",
        },
      },
      {
        title: 'Construction de maison de charme',
        text: 'Si vous aimez un style architectural plus classique, traditionnel ou pittoresque, nos architectes pourront dessiner et réaliser avec vous la maison dont vous rêvez. Les toitures en pente peuvent par exemple permettre de créer des espaces avec des doubles hauteurs, et les formes compactes sont toujours un avantage d’un point écologique. Des matériaux comme la pierre, le plâtre, les enduits, des menuiseries en bois et de beaux revêtements de sols peuvent donner du charme à une maison traditionnelle.',
        image: {
          url: 'construction-maison-de-charme.jpg',
          alt: "Construction d'une maison de charme par un architecte",
        },
      },
      {
        title: 'Construction de maison modulaire ou en containers',
        text: `Aujourd’hui, de nombreuses techniques de construction permettent d’imaginer des architectures ambitieuses avec des prix et des délais de construction réduits. C’est le cas de la construction modulaire, où des éléments préfabriqués de dimensions standards sont réalisés en usine puis assemblés sur le terrain de la maison. Même si elles sont rares à ${cities[0]} et ${depPrefix} ${department}, les maisons réalisées en containers sont très demandées : des containers sont réunis et fixés entre eux pour créer des architectures uniques.`,
        image: {
          url: 'construction-maison-modulaire.jpg',
          alt: "Construction d'une maison modulaire par un architecte",
        },
      },
    ],
    listTitle: `Les différents types de maisons neuves ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre maison ${depPrefix} ${department}`,
      'Quelques maisons construites par nos architectes à proximité',
    ],
    blog: {
      image: 'extension-maison-blog.jpg',
      imageAlt: "extension d'une maison à Vannes",
      url: 'https://blog.archibien.com/extension-en-bois-vannes/',
      quote:
        'Nous ne pensions pas avoir autant de possibilités pour cette extension, à propos de laquelle nous réfléchissions pourtant depuis longtemps !',
      author: 'Anne-Lise et Jacques',
    },
    questions: [
      {
        title: 'Faut-il trouver le terrain avant de commencer à travailler avec un architecte ?',
        answer: `<p>De nos jours, les contraintes les plus importantes pour pouvoir construire sur un terrain sont les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Aussi, concevoir une maison avant de connaître l’endroit où elle sera implantée n’est pas recommandé. Lors de votre recherche de terrain, n’hésitez pas à nous solliciter : Archibien peut vous aider à déterminer le potentiel de constructibilité d’une parcelle.</p>`,
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour construire sa maison ?',
        answer:
          '<p>Ce n’est pas toujours obligatoire : une maison de petite taille peut être construite par un constructeur de maison individuelle par exemple. Mais si vous voulez intervenir dans la conception de votre maison, si vous voulez une maison unique, ou si vous voulez une maison de plus de 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>',
      },
      {
        title: 'Est-ce plus cher de construire sa maison avec un architecte ?',
        answer:
          '<p>La réponse n’est pas simple. Les maisons qui ne sont pas construites par des architectes sont souvent des maisons modestes, réplicables, avec des matériaux et des performances basiques - elles ont donc souvent un prix de revient modéré, où les constructeurs dégagent néanmoins des marges confortables. De l’autre côté, les maisons demandées aux architectes peuvent aller d’une maison minimaliste et sobre à une maison luxueuse et complexe - les prix varient donc beaucoup. En réalité, ce n’est pas le fait de travailler avec un architecte qui rend une maison plus chère, c’est plutôt que les maisons qui sont demandées aux architectes sont souvent plus élaborées et donc plus coûteuses.</p>',
      },
    ],
  }),
  restaurant: (department, cities, depPrefix) => ({
    steps: [
      {
        title: '1. Mettre au point votre projet',
        content: `À cette étape, il vous faut déterminer dans les grandes lignes : <ul class="list-disc pl-m pt-xs pb-s"> <li class="pb-min"> Ce que vous voulez faire : usage, surface, nombre de pièces, stationnements à prendre en compte, espaces extérieurs ou non, style, matériaux, performances énergétiques… </li> <li class="pb-min"> L’endroit où vous souhaitez construire : êtes-vous déjà propriétaire d’un terrain ? Quelles sont ses caractéristiques ? </li> <li class="pb-min"> Ce que vous avez le droit de faire : le Plan Local d’Urbanisme (PLU) et d’autres documents et interlocuteurs (dont parfois les Architectes des Bâtiments de France, ou “ABF”) encadrent les possibilités de construction ou d’aménagement. C’est sans doute le plus compliqué pour les non-initiés, car les règles sont complexes, se superposent, et certains éléments doivent être négociés, notamment à ${cities}. </li> <li class="pb-min"> Quel est votre budget : le coût de construction d’un bâtiment, en France, commence aux alentours de 1500€ HT par mètre carré chauffé : pour des commerces, locaux industriels ou artisanaux, les prix peuvent être plus bas. Pour un tel prix, il est donc souvent utile de déterminer un budget en amont. </li> </ul> → Archibien vous accompagne pour mettre au point votre projet. Nous avons travaillé sur de nombreux projets sur des terrains de toutes sortes étudié les contraintes d’urbanisme applicables dans des contextes variés (en centre-ville, hameau, au bord de l’eau…), et aidé à la définition d’enveloppes budgétaires.`,
      },
      {
        title: '2. Choisir le bon architecte',
        content:
          'L’architecte est le professionnel qui pourra vous accompagner sur toutes les étapes de votre projet, ou seulement sur quelques phases. Donnez-vous les moyens de sélectionner le bon architecte pour votre projet de construction de bâtiment. Il existe 7 familles de critères à prendre en compte pour choisir un architecte pour construire un immeuble : <ol class="list-decimal pl-m pt-xs pb-s"> <li class="pb-min"> Sa localisation ; </li> <li class="pb-min"> Ses qualifications professionnelles ; </li> <li class="pb-min"> Ses spécialités ; </li> <li class="pb-min"> Son style et ses références ; </li> <li class="pb-min"> Son prix et la gamme des projets qu’il traite ; </li> <li class="pb-min"> Sa disponibilité ;</li> <li class="pb-min"> Votre affinité avec l’architecte, et ses recommandations. </li> </ol> → Vous aider à trouver le bon architecte, c’est notre métier chez Archibien. Nous pensons que pour choisir votre architecte, il faut pouvoir comparer : c’est pour cela que nous avons mis en place nos <a href="/services/consultation/" class="text-link">Consultations </a>, où trois architectes locaux vous rencontrent, puis dessinent et chiffrent votre projet. Vous comparez, vous choisissez !',
      },
      {
        title: '3. Conception et démarches administratives',
        content:
          'À partir du moment où vous aurez trouvé le bon architecte pour construire votre maison, l’agence d’architecture va vous proposer de découper son travail en phases, et définir dans un contrat son prix, ses délais et les livrables. Le découpage peut varier, mais l’objet des premières phases est toujours le même : d’abord dessiner et définir le projet (phases Esquisse (ESQ) puis Avant-Projet Sommaire (APS) puis Avant-Projet Définitif (APD)), et enfin réaliser le Dossier de Permis de Construire (DPC) ou la Déclaration Préalable de Travaux (DP), pour obtenir l’autorisation officielle de mener à bien les travaux. <br> Pendant ces premières phases, le cabinet d’architecture estimera aussi le prix de la construction, des études, frais, assurances et autres coûts liés au projet ; ainsi que le planning de l’opération. Il va de soi que vous serez sollicités régulièrement, car le projet s’affine à chaque étape avec vos retours.',
      },
      {
        title: '4. Détailler le projet et sélectionner les entreprises',
        content:
          'Une fois le Permis de Construire obtenu et affiché pendant le délai légal sans recours de tiers (ou parfois pendant ces délais pour gagner du temps), l’architecte va poursuivre le travail sur le projet, en dessinant plus finement encore la maison : c’est la phase Étude de Projet (PRO), qui permet ensuite de réaliser les plans d’Exécution (EXE). Ces derniers sont utilisés pour obtenir des devis des entreprises qui vont intervenir sur le chantier, et pour pouvoir comparer les offres de ces dernières. Sur la base d’un Dossier de Consultation des Entreprises (DCE), l’architecte a pour rôle d’assister le maître d’ouvrage (le porteur du projet) à passer les contrats : c’est l’Assistance aux Contrats de Travaux (ACT). <br> Toutes ces phases prennent du temps, qu’il ne faut pas négliger : même si les travaux ne peuvent pas commencer avant que le PC ne soit purgé, il est fréquent qu’ils ne commencent que quelques semaines ou mois après ce délai légal, car les bonnes entreprises sont aussi très occupées et doivent organiser leur travail.',
      },
      {
        title: '5. Suivre le chantier et livrer la maison',
        content:
          'Le suivi de chantier, qui est une partie importante de la mission de maîtrise d’oeuvre de l’architecte, n’est pas à sous-estimer. Coordonner des entreprises sur un temps long, préciser des éléments techniques et fonctionnels sur place avec les artisans, veiller à ce que tout soit réalisé dans les règles de l’art n’est pas une mince affaire. L’architecte, qui en dessinant les plans et en suivant la construction de la maison se porte garant du respect du projet, porte aussi la garantie assurantielle du projet. Ainsi, à la livraison du chantier, il aura levé les réserves et validé tout ce qui aura été construit pour que vous puissiez emménager sereinement, et restera votre interlocuteur en cas de problème.',
      },
    ],
    list: [
      {
        title: 'Construction de maison en bois',
        text: `Les maisons en bois ont le vent en poupe, et à juste titre : plus écologiques et rapides à construire, il n’y a pas réellement de limitations techniques liées à ce mode constructif. Plusieurs méthodes de construction existent et nous pourrons vous aider à déterminer celui qui est le plus pertinent pour votre projet : maison en ossature bois préfabriquée ou construite sur place, en panneaux en bois lamellé croisé (CLT), en madriers… Si tous les architectes ne sont pas familiers avec la construction bois, la profession est, en ${department}, bien formée et compétente pour gérer des chantiers de construction bois, et nous pourrons vous orienter vers les bonnes agences d’architecture. Certains architectes proposent même d’obtenir des certifications, comme le label PassivHauss (maison passive), HQE, BBC, Effinergie, etc.`,
        image: {
          url: 'construction-maison-bois.jpg',
          alt: "Construction d'une maison en bois par un architecte",
        },
      },
      {
        title: 'Construction de maison moderne ou contemporaine',
        text: `Dans le langage architectural, le courant “moderne” fait référence à une période comprise entre 1920 et 2000, où les développements techniques de l’acier, du verre et du béton, associés à un goût pour le minimalisme ont donné lieu à des constructions avec des compositions de volumes sobres. Quelques beaux exemples sont visibles à ${
          cities.length > 1 ? cities[0] + ' et ' + cities[1] : cities[0]
        }. L’adjectif “contemporain” fait référence, lui, aux courants architecturaux actuels. Si vous souhaitez un logement de style moderne ou contemporain avec de grandes ouvertures, une toiture plate, des volumes atypiques et des espaces de vie agréables, l’architecte est le bon professionnel pour vous accompagner.`,
        image: {
          url: 'construction-maison-moderne.jpg',
          alt: "Construction d'une maison moderne par un architecte",
        },
      },
      {
        title: 'Construction de maison de charme',
        text: 'Si vous aimez un style architectural plus classique, traditionnel ou pittoresque, nos architectes pourront dessiner et réaliser avec vous la maison dont vous rêvez. Les toitures en pente peuvent par exemple permettre de créer des espaces avec des doubles hauteurs, et les formes compactes sont toujours un avantage d’un point écologique. Des matériaux comme la pierre, le plâtre, les enduits, des menuiseries en bois et de beaux revêtements de sols peuvent donner du charme à une maison traditionnelle.',
        image: {
          url: 'construction-maison-de-charme.jpg',
          alt: "Construction d'une maison de charme par un architecte",
        },
      },
      {
        title: 'Construction de maison modulaire ou en containers',
        text: `Aujourd’hui, de nombreuses techniques de construction permettent d’imaginer des architectures ambitieuses avec des prix et des délais de construction réduits. C’est le cas de la construction modulaire, où des éléments préfabriqués de dimensions standards sont réalisés en usine puis assemblés sur le terrain de la maison. Même si elles sont rares à ${cities[0]} et ${depPrefix} ${department}, les maisons réalisées en containers sont très demandées : des containers sont réunis et fixés entre eux pour créer des architectures uniques.`,
        image: {
          url: 'construction-maison-modulaire.jpg',
          alt: "Construction d'une maison modulaire par un architecte",
        },
      },
    ],
    listTitle: `Les différents types de maisons neuves ${depPrefix} ${department}`,
    title_inspiration: [
      `Quelques-uns de nos architectes pour construire votre maison ${depPrefix} ${department}`,
      'Quelques maisons construites par nos architectes à proximité',
    ],
    blog: {
      image: 'extension-maison-blog.jpg',
      imageAlt: "extension d'une maison à Vannes",
      url: 'https://blog.archibien.com/extension-en-bois-vannes/',
      quote:
        'Nous ne pensions pas avoir autant de possibilités pour cette extension, à propos de laquelle nous réfléchissions pourtant depuis longtemps !',
      author: 'Anne-Lise et Jacques',
    },
    questions: [
      {
        title: 'Faut-il trouver le terrain avant de commencer à travailler avec un architecte ?',
        answer: `<p>De nos jours, les contraintes les plus importantes pour pouvoir construire sur un terrain sont les règles d’urbanisme (Plan Local d’Urbanisme, zone ABF, nature des sols…), et ${cities[0]} et les communes avoisinantes n’échappent pas à la règle. Aussi, concevoir une maison avant de connaître l’endroit où elle sera implantée n’est pas recommandé. Lors de votre recherche de terrain, n’hésitez pas à nous solliciter : Archibien peut vous aider à déterminer le potentiel de constructibilité d’une parcelle.</p>`,
      },
      {
        title: 'Est-il nécessaire de travailler avec un architecte pour construire sa maison ?',
        answer:
          '<p>Ce n’est pas toujours obligatoire : une maison de petite taille peut être construite par un constructeur de maison individuelle par exemple. Mais si vous voulez intervenir dans la conception de votre maison, si vous voulez une maison unique, ou si vous voulez une maison de plus de 150m2 habitables, alors l’intervention d’un architecte est inévitable.</p>',
      },
      {
        title: 'Est-ce plus cher de construire sa maison avec un architecte ?',
        answer:
          '<p>La réponse n’est pas simple. Les maisons qui ne sont pas construites par des architectes sont souvent des maisons modestes, réplicables, avec des matériaux et des performances basiques - elles ont donc souvent un prix de revient modéré, où les constructeurs dégagent néanmoins des marges confortables. De l’autre côté, les maisons demandées aux architectes peuvent aller d’une maison minimaliste et sobre à une maison luxueuse et complexe - les prix varient donc beaucoup. En réalité, ce n’est pas le fait de travailler avec un architecte qui rend une maison plus chère, c’est plutôt que les maisons qui sont demandées aux architectes sont souvent plus élaborées et donc plus coûteuses.</p>',
      },
    ],
  }),
}
