# Media locali

Le foto dei progetti vivono qui, una cartella per serie (come nel vecchio portfolio).

```
public/media/projects/
  Florentina/
  Nude/
  L'isola/
  ...
```

Path usati nel codice: `/media/projects/<cartella>/<file>.webp`

Per scaricare/aggiornare da un backup Drive (solo setup):

```bash
npm run media:download
```

In produzione non serve Google Drive: basta committare o deployare questa cartella.
