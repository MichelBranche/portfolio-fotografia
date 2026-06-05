/**
 * Genera projects.json con path locali da drive-manifest + metadata.
 * node scripts/gen-projects.mjs > scripts/projects.json
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/drive-manifest.json'), 'utf8'),
)

const meta = {
  florentina: {
    title: 'FLORENTINA',
    category: 'Ricerca personale',
    location: 'Romania · Italia',
    year: '',
    summary:
      'Ricostruzione della storia di mia madre attraverso l’archivio di famiglia ritrovato in Romania.',
    heroFile: '01_mamma.webp',
  },
  nude: {
    title: 'NUDE',
    category: 'Ricerca personale',
    location: '',
    year: '',
    summary: 'Trittico sul corpo femminile attraverso distorsione visiva e bianco e nero.',
    heroFile: '01_nude.webp',
  },
  'l-isola': {
    title: "L'ISOLA",
    category: 'Ricerca personale',
    location: 'Fuerteventura',
    year: '',
    summary: 'Sei mesi sull’isola: deserto, mare, silenzio e poche figure necessarie.',
    heroFile: '01_fuerteventura-copertina.webp',
  },
  parigi: {
    title: 'PARIGI',
    category: 'Ricerca personale',
    location: 'Parigi',
    year: '',
    summary: 'Strada, luce, architettura — frammenti urbani.',
    heroFile: '09_parigi.webp',
  },
  'taboo-shooting': {
    title: 'TABOO SHOOTING',
    category: 'Ricerca personale',
    location: "Valle d'Aosta",
    year: '2022',
    summary: 'Reportage all’Albergo Etico di Fènis: lavoro, inclusione e quotidianità.',
    heroFile: 'albergo_eitico_fenis-3.webp',
  },
  'moda-shooting': {
    title: 'MODA SHOOTING',
    category: 'Fotografia di moda',
    location: 'Italia',
    year: '2022–2023',
    summary: 'Shooting editoriale con modelli internazionali e set di corso.',
    heroFile: '05_moda-matilde.webp',
  },
  'moda-jump': {
    title: 'MODA JUMP',
    category: 'Fotografia di moda',
    location: 'Studio',
    year: '',
    summary: 'Studio, salto, gesto — sequenza essenziale.',
    heroFile: '05_jump.webp',
  },
  'gallipoli-day': {
    title: 'GALLIPOLI — GIORNO',
    category: 'Fotografia di eventi',
    location: 'Gallipoli',
    year: '',
    summary: 'Luce del giorno sul mare: calore, attesa, tempo lento.',
    heroFile: '27_gallipoli-personal.webp',
  },
  'gallipoli-night': {
    title: 'GALLIPOLI — NOTTE',
    category: 'Fotografia di eventi',
    location: 'Gallipoli',
    year: '',
    summary: 'Festival estivo: notte, luci, folla e musica.',
    heroFile: '29_gallipoli-personal.webp',
  },
  'concerti-ernia': {
    title: 'CONCERTI — ERNIA',
    category: 'Fotografia di eventi',
    location: 'Live',
    year: '',
    summary: 'Presenza, luce, pubblico — sequenza editoriale dal concerto.',
    heroFile: '29_ernia_gallipoli.webp',
  },
  'laurea-ame': {
    title: 'LAUREA — AME',
    category: 'Fotografia di eventi',
    location: '',
    year: '',
    summary: 'Un giorno di traguardo condiviso con gesti veri e attese brevi.',
    heroFile: '23_laurea-ame.webp',
  },
  'anca-edward': {
    title: 'ANCA & EDWARD',
    category: 'Fotografia maternity',
    location: "Valle d'Aosta",
    year: '2025',
    summary: 'Ritratti di coppia in ambiente naturale.',
    heroFile: '07_Anca-Edward.webp',
  },
}

const order = [
  'florentina',
  'nude',
  'l-isola',
  'parigi',
  'taboo-shooting',
  'moda-shooting',
  'moda-jump',
  'gallipoli-day',
  'gallipoli-night',
  'concerti-ernia',
  'laurea-ame',
  'anca-edward',
]

const byId = Object.fromEntries(manifest.projects.map((p) => [p.id, p]))

function mediaPath(folder, file) {
  const encodedFolder = folder.split('/').map(encodeURIComponent).join('/')
  return `/media/projects/${encodedFolder}/${encodeURIComponent(file)}`
}

const projects = order.map((id, index) => {
  const project = byId[id]
  const info = meta[id]
  const hero =
    project.images.find((img) => img.file === info.heroFile) || project.images[0]

  return {
    id: String(index + 1).padStart(2, '0'),
    slug: id,
    folder: project.folder,
    heroFile: hero.file,
    title: info.title,
    location: info.location,
    year: info.year,
    category: info.category,
    summary: info.summary,
    image: mediaPath(project.folder, hero.file),
  }
})

process.stdout.write(JSON.stringify(projects, null, 2))
