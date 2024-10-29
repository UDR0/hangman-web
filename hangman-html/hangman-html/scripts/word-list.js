const wordList = [
    {
        word: "banc",
        hint: "Un endroit pour s'asseoir dans un parc ou à l'école."
    },
    {
        word: "bureau",
        hint: "L'endroit où vous travaillez ou étudiez."
    },
    {
        word: "cabinet",
        hint: "Un petit meuble de rangement."
    },
    {
        word: "carreau",
        hint: "Une petite tuile généralement utilisée pour les sols ou les murs."
    },
    {
        word: "chaise",
        hint: "Un siège avec un dossier et des jambes."
    },
    {
        word: "classe",
        hint: "Un groupe d'élèves dans une école."
    },
    {
        word: "cle",
        hint: "Un petit outil pour ouvrir une serrure."
    },
    {
        word: "coin",
        hint: "L'endroit où deux murs se rencontrent."
    },
    {
        word: "couloir",
        hint: "Un long passage à l'intérieur d'un bâtiment."
    },
    {
        word: "dossier",
        hint: "Un ensemble de documents ou un siège avec un dossier."
    },
    {
        word: "eau",
        hint: "La substance essentielle à la vie, incolore et inodore."
    },
    {
        word: "ecole",
        hint: "Un endroit où les élèves apprennent."
    },
    {
        word: "ecriture",
        hint: "L'acte de former des lettres et des mots sur du papier."
    },
    {
        word: "entree",
        hint: "L'endroit où vous entrez dans un bâtiment."
    },
    {
        word: "escalier",
        hint: "Une série de marches pour monter ou descendre."
    },
    {
        word: "etagere",
        hint: "Un meuble avec des étagères pour ranger des objets."
    },
    {
        word: "etude",
        hint: "Le temps passé à apprendre ou à se concentrer sur un sujet."
    },
    {
        word: "exterieur",
        hint: "L'extérieur d'un bâtiment ou de l'espace en plein air."
    },
    {
        word: "fenetre",
        hint: "Une ouverture dans un mur avec du verre pour laisser entrer la lumière."
    },
    {
        word: "interieur",
        hint: "L'intérieur d'un bâtiment ou d'un espace."
    },
    {
        word: "lavabo",
        hint: "Un évier utilisé pour se laver les mains ou le visage."
    },
    {
        word: "lecture",
        hint: "L'action de lire un livre ou un texte."
    },
    {
        word: "lit",
        hint: "Un meuble pour dormir."
    },
    {
        word: "marche",
        hint: "Une action de déplacement en montant ou en descendant."
    },
    {
        word: "matelas",
        hint: "Un coussin épais utilisé sur un lit."
    },
    {
        word: "maternelle",
        hint: "L'école pour les jeunes enfants avant l'école primaire."
    },
    {
        word: "meuble",
        hint: "Un objet utilitaire à l'intérieur d'une maison."
    },
    {
        word: "mousse",
        hint: "Une substance douce et spongieuse que l'on trouve dans la nature."
    },
    {
        word: "mur",
        hint: "Une structure verticale qui sépare les pièces d'une maison."
    },
    {
        word: "porte",
        hint: "Une ouverture dans un mur qui permet de passer d'une pièce à l'autre."
    },
    {
        word: "portemanteau",
        hint: "Un meuble ou un dispositif pour suspendre des manteaux et des vestes."
    },
    {
        word: "poubelle",
        hint: "Un conteneur pour les déchets."
    },
    {
        word: "radiateur",
        hint: "Un appareil pour chauffer une pièce."
    },
    {
        word: "rampe",
        hint: "Une barre ou une structure inclinée pour monter ou descendre."
    },
    {
        word: "recreation",
        hint: "La pause pendant la journée d'école où les élèves jouent."
    },
    {
        word: "rentree",
        hint: "Le début de l'année scolaire."
    },
    {
        word: "toilette",
        hint: "La salle de bains où l'on se lave et où l'on va aux toilettes."
    },
    {
        word: "bataille",
        hint: "Un conflit ou une lutte entre deux groupes ou forces."
    },
    {
        word: "ancre",
        hint: "Un objet lourd attaché à un bateau pour le maintenir en place."
    },
    {
        word: "amande",
        hint: "Une noix comestible au goût doux."
    },
    {
        word: "jeune",
        hint: "Une personne qui n'est pas encore adulte."
    },
    {
        word: "ville",
        hint: "Un endroit où de nombreuses personnes vivent et travaillent."
    },
    {
        word: "jumelles",
        hint: "Un instrument optique pour voir de loin."
    },
    {
        word: "cheveux",
        hint: "Les fils sur la tête qui poussent."
    },
    {
        word: "album",
        hint: "Un livre contenant des souvenirs ou des photos."
    },
    {
        word: "femme",
        hint: "Une adulte de sexe féminin."
    },
    {
        word: "homme",
        hint: "Un adulte de sexe masculin."
    },
    {
        word: "question",
        hint: "Une demande d'information ou une énigme."
    },
    {
        word: "auberge",
        hint: "Un endroit où les voyageurs peuvent se reposer et manger."
    },
    {
        word: "visage",
        hint: "La partie avant de la tête avec les yeux, le nez et la bouche."
    },
    {
        word: "herbe",
        hint: "La végétation verte qui pousse dans les jardins."
    },
    {
        word: "courrier",
        hint: "Les lettres et les colis que vous recevez par la poste."
    },
    {
        word: "plat",
        hint: "Un aliment servi dans une assiette."
    },
    {
        word: "drapeau",
        hint: "Un morceau de tissu avec des couleurs et des symboles nationaux."
    },
    {
        word: "turbulence",
        hint: "Des mouvements brusques et irréguliers dans l'air ou l'eau."
    },
    {
        word: "transpirer",
        hint: "Le processus de libération de la sueur par la peau."
    },
    
    {
        word: "enigmatique",
        hint: "Qui est mysterieux et difficile a comprendre."
    },
        
    {
        word: "sismographe",
        hint: "Un instrument qui enregistre les tremblements de terre."
    },
        
    {
        word: "holographie",
        hint: "Une technique d'imagerie en trois dimensions."
    },
        
    {
        word: "equinoxe",
        hint: "Un moment de l'annee ou la duree du jour et de la nuit est egale."
    },
        
     
    {
        word: "amphitheatre",
        hint: "Un lieu de spectacle en forme de demi-cercle."
        
    },
        
    {
        word: "exoplanete",
        hint: "Une planete qui orbite autour d'une autre etoile que le Soleil."
    },
        
    {
        word: "archeologie",
        hint: "L'etude des civilisations anciennes a travers leurs vestiges."
    },
        
    {
        word: "nebuleuse",
        hint: "Un nuage de gaz et de poussiere dans l'espace."
    },
        
    {
        word: "mycologie",
        hint: "L'etude des champignons."
    },
        
    {
        word: "geothermie",
        hint: "L'utilisation de la chaleur de la Terre pour produire de l'energie."
    },

        
    {
        word: "chiaroscuro",
        hint: "L'usage artistique de la lumiere et de l'ombre."
    },
        
    {
        word: "epigenetique",
        hint: "Les modifications de l'expression des genes sans alteration de la sequence ADN."
    },        
]