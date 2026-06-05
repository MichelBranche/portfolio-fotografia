import { mediaUrl, siteMediaUrl } from '../lib/media'

export const site = {
  name: 'Rubina Stradella',
  shortName: 'Rubina',
  tagline: 'Fotografa',
  location: 'Valle d’Aosta · Brescia',
  email: 'rubinastradella1d@gmail.com',
  phone: '+39 389 872 1961',
  instagram: '@rubinastradella',
  instagramArt: '@byapemaya',
  instagramUrl: 'https://www.instagram.com/rubinastradella/',
  instagramArtUrl: 'https://www.instagram.com/byapemaya/',
  year: new Date().getFullYear(),
  credit: {
    label: 'Michel Branche',
    url: 'https://portfolio-three-ruby-wf4uz6dmu1.vercel.app/',
  },
}

export const navLinks = [
  { label: 'Progetti', href: '#lavori' },
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Contatti', href: '#contatti' },
]

export const statement = {
  label: 'Why',
  headline: 'Fatta per essere vista.',
  subline: 'O ricordata. O entrambe.',
  body: 'Adoro osservare, amo creare e mi affascinano le storie — quelle reali, di persone. Sento di avere il compito di mantenere la memoria viva, ascoltando e raccontando attraverso immagini che non sono solo scatti, ma veri ricordi.',
}

export const marqueeOutfit = 'Made to be seen · Or remembered · Or both'

export const marqueeLines = [
  'Ricerca personale · Moda · Eventi · Maternity',
  'Archivio · Memoria · Luce · Storie vere',
]

export const aboutParagraphs = [
  'Mi chiamo Rubina Maya, ho 23 anni e sono nata in Valle d’Aosta, dove sin da piccola ho coltivato la curiosità per l’arte e la fotografia.',
  'Intraprendo gli studi al Liceo Artistico di Aosta e mi diplomo nel 2021. Qui conosco non solo il disegno, ma anche la storia dell’arte, la grafica e la fotografia, che già praticavo per conto mio.',
  'Dall’ottobre del 2021 a settembre 2024 frequento la LABA di Brescia e a luglio 2025 ottengo il diploma accademico di primo livello in Fotografia, con una tesi di ricerca sull’archivio fotografico di famiglia intitolata L’archivio ritrovato.',
  'Sento di avere il compito di mantenere la memoria viva — che sia la mia, ascoltando e raccontando, che sia quella delle altre persone, creando fotografie che non sono solo immagini, ma veri e propri ricordi.',
]

export const quote = {
  text: 'La fotografia riproduce meccanicamente ciò che non potrà mai ripetersi.',
  author: 'Roland Barthes',
}

const projectDefs = [
  {
    id: '01',
    slug: 'florentina',
    folder: 'Florentina',
    heroFile: '01_mamma.webp',
    title: 'FLORENTINA',
    location: 'Romania · Italia',
    year: '',
    category: 'Ricerca personale',
    summary:
      'Ricostruzione della storia di mia madre attraverso l’archivio di famiglia ritrovato in Romania.',
  },
  {
    id: '02',
    slug: 'nude',
    folder: 'Nude',
    heroFile: '01_nude.webp',
    title: 'NUDE',
    location: '',
    year: '',
    category: 'Ricerca personale',
    summary: 'Trittico sul corpo femminile attraverso distorsione visiva e bianco e nero.',
  },
  {
    id: '03',
    slug: 'l-isola',
    folder: "L'isola",
    heroFile: '01_fuerteventura-copertina.webp',
    title: "L'ISOLA",
    location: 'Fuerteventura',
    year: '',
    category: 'Ricerca personale',
    summary: 'Sei mesi sull’isola: deserto, mare, silenzio e poche figure necessarie.',
  },
  {
    id: '04',
    slug: 'parigi',
    folder: 'parigi',
    heroFile: '09_parigi.webp',
    title: 'PARIGI',
    location: 'Parigi',
    year: '',
    category: 'Ricerca personale',
    summary: 'Strada, luce, architettura — frammenti urbani.',
  },
  {
    id: '05',
    slug: 'taboo-shooting',
    folder: 'taboo-shooting',
    heroFile: 'albergo_eitico_fenis-3.webp',
    title: 'TABOO SHOOTING',
    location: "Valle d'Aosta",
    year: '2022',
    category: 'Ricerca personale',
    summary: 'Reportage all’Albergo Etico di Fènis: lavoro, inclusione e quotidianità.',
  },
  {
    id: '06',
    slug: 'moda-shooting',
    folder: 'Moda-shooting',
    heroFile: '05_moda-matilde.webp',
    title: 'MODA SHOOTING',
    location: 'Italia',
    year: '2022–2023',
    category: 'Fotografia di moda',
    summary: 'Shooting editoriale con modelli internazionali e set di corso.',
  },
  {
    id: '07',
    slug: 'moda-jump',
    folder: 'Moda_jump',
    heroFile: '05_jump.webp',
    title: 'MODA JUMP',
    location: 'Studio',
    year: '',
    category: 'Fotografia di moda',
    summary: 'Studio, salto, gesto — sequenza essenziale.',
  },
  {
    id: '08',
    slug: 'gallipoli-day',
    folder: 'Gallipoli-day',
    heroFile: '27_gallipoli-personal.webp',
    title: 'GALLIPOLI — GIORNO',
    location: 'Gallipoli',
    year: '',
    category: 'Fotografia di eventi',
    summary: 'Luce del giorno sul mare: calore, attesa, tempo lento.',
  },
  {
    id: '09',
    slug: 'gallipoli-night',
    folder: 'Gallipoli-night',
    heroFile: '29_gallipoli-personal.webp',
    title: 'GALLIPOLI — NOTTE',
    location: 'Gallipoli',
    year: '',
    category: 'Fotografia di eventi',
    summary: 'Festival estivo: notte, luci, folla e musica.',
  },
  {
    id: '10',
    slug: 'concerti-ernia',
    folder: 'concerti-ernia',
    heroFile: '29_ernia_gallipoli.webp',
    title: 'CONCERTI — ERNIA',
    location: 'Live',
    year: '',
    category: 'Fotografia di eventi',
    summary: 'Presenza, luce, pubblico — sequenza editoriale dal concerto.',
  },
  {
    id: '11',
    slug: 'laurea-ame',
    folder: 'Laurea-ame',
    heroFile: '23_laurea-ame.webp',
    title: 'LAUREA — AME',
    location: '',
    year: '',
    category: 'Fotografia di eventi',
    summary: 'Un giorno di traguardo condiviso con gesti veri e attese brevi.',
  },
  {
    id: '12',
    slug: 'anca-edward',
    folder: 'Anca-edward',
    heroFile: '07_Anca-Edward.webp',
    title: 'ANCA & EDWARD',
    location: "Valle d'Aosta",
    year: '2025',
    category: 'Fotografia maternity',
    summary: 'Ritratti di coppia in ambiente naturale.',
  },
] as const

export const projects = projectDefs.map((project) => ({
  ...project,
  image: mediaUrl(project.folder, project.heroFile),
}))

export const heroImage = projects[0].image
export const portraitImage = siteMediaUrl('rubina-portrait.png')

export const heroAside = [
  'Fotografia personale,',
  'moda, eventi e maternity —',
  'Valle d’Aosta · Brescia',
]

export const services = [
  {
    title: 'Ricerca personale',
    description:
      'Progetti autobiografici e documentari: archivi di famiglia, memoria, identità e narrazione intima.',
  },
  {
    title: 'Fotografia di moda',
    description:
      'Shooting editoriali in studio e in location, con luce studiata e direzione leggera sul corpo e sul gesto.',
  },
  {
    title: 'Fotografia di eventi',
    description:
      'Concerti, festival, giorni speciali — sequenze editoriali che restituiscono energia, luce e presenza.',
  },
  {
    title: 'Fotografia maternity',
    description:
      'Ritratti di maternità e di coppia in ambienti naturali, con attenzione alla delicatezza del momento.',
  },
]

export function formatProjectMeta(project: (typeof projects)[number]) {
  const parts = [project.location, project.year].filter(Boolean)
  return parts.length ? parts.join(' · ') : project.category
}
