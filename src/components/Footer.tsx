import { site } from '../data/content'

export function Footer() {
  const yearMark = `©${String(site.year).slice(-2)}`

  return (
    <footer className="site-footer">
      <p className="site-footer__year" aria-hidden="true">
        {yearMark}
      </p>
      <div className="site-footer__meta">
        <p>
          © {site.year} {site.name}
        </p>
        <p>
          Portfolio — Made By{' '}
          <a href={site.credit.url} target="_blank" rel="noreferrer">
            {site.credit.label}
          </a>
        </p>
        <a href="#top">Torna su</a>
      </div>
    </footer>
  )
}
