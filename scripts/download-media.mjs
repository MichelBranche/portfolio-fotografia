/**
 * Scarica le immagini del manifest in public/media/projects/<folder>/<file>.
 * Uso una tantum (o per aggiornare): node scripts/download-media.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '../public/media/projects')
const manifestPath = path.join(__dirname, '../src/data/drive-manifest.json')

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))

function driveThumbnailUrl(driveId, size = 1920) {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(driveId)}&sz=w${size}`
}

async function downloadFile(url, dest) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${dest}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 500) throw new Error(`File troppo piccolo: ${dest}`)
  fs.writeFileSync(dest, buf)
}

let downloaded = 0
let skipped = 0
let failed = 0

for (const project of manifest.projects) {
  const dir = path.join(root, project.folder)
  fs.mkdirSync(dir, { recursive: true })

  for (const img of project.images) {
    const dest = path.join(dir, img.file)
    if (fs.existsSync(dest)) {
      skipped++
      continue
    }

    try {
      await downloadFile(driveThumbnailUrl(img.driveId), dest)
      downloaded++
      process.stdout.write(`OK ${project.folder}/${img.file}\n`)
    } catch (err) {
      failed++
      console.error(`FAIL ${project.folder}/${img.file}:`, err.message)
    }
  }
}

console.log(`\nDone: ${downloaded} downloaded, ${skipped} skipped, ${failed} failed`)
