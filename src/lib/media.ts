export function mediaUrl(folder: string, file: string) {
  const encodedFolder = folder.split('/').map(encodeURIComponent).join('/')
  return `/media/projects/${encodedFolder}/${encodeURIComponent(file)}`
}

export function siteMediaUrl(file: string) {
  return `/media/site/${encodeURIComponent(file)}`
}
