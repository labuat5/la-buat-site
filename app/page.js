export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Via Magazzari 5 • Bologna</p>
          <h1>La Buàt per ogni momento</h1>
          <p className="hero-text">
            Colazioni, pranzo a buffet, pizza e apericena in un ambiente
            accogliente, semplice da raggiungere e pensato per stare bene.
          </p>

          <div className="hero-buttons">
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/la_buat_/"
              target="_blank"
              rel="noreferrer"
            >
              Prenota qui
            </a>

            <a
              className="btn btn-secondary"
              href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
              target="_blank"
              rel="noreferrer"
            >
              Apri su Maps
            </a>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="container narrow">
          <h2>Un posto da vivere dalla mattina alla sera</h2>
          <p>
            La Buàt è il punto giusto per una colazione tranquilla, un pranzo
            pratico e gustoso o una serata tra pizza, apericena e compagnia.
          </p>
        </div>
      </section>

      <section className="services section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">Cosa trovi</p>
            <h2>Una proposta semplice e versatile</h2>
          </div>

          <div className="cards">
            <div className="card">
              <span className="card-icon">☕</span>
              <h3>Colazioni</h3>
              <p>Per iniziare la giornata con calma e qualcosa di buono.</p>
            </div>

            <div className="card">
              <span className="card-icon">🍽️</span>
              <h3>Pranzo a buffet</h3>
              <p>
                Ogni giorno una proposta diversa con piatto del giorno e buffet.
              </p>
            </div>

            <div className="card">
              <span className="card-icon">🍕</span>
              <h3>Pizza</h3>
              <p>Una soluzione ideale sia a pranzo che per la sera.</p>
            </div>

            <div className="card">
              <span className="card-icon">🥂</span>
              <h3>Apericena</h3>
              <p>Per una serata leggera, conviviale e senza complicazioni.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-banner section">
        <div className="container narrow center">
          <h2>Il menu cambia ogni giorno</h2>
          <p>Passa a scoprirlo o scrivici per avere più informazioni.</p>
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/la_buat_/"
            target="_blank"
            rel="noreferrer"
          >
            Contattaci
          </a>
        </div>
      </section>

      <section className="location section">
        <div className="container two-columns">
          <div>
            <p className="eyebrow dark">Dove siamo</p>
            <h2>Facile da raggiungere a Bologna</h2>
            <p>
              Ci trovi in Via Magazzari 5, in zona San Donato. Un punto comodo
              per residenti, lavoratori, gruppi di amici e chi vuole fermarsi in
              un ambiente accogliente.
            </p>

            <div className="info-box">
              <strong>La Buàt</strong>
              <span>Via Magazzari 5, Bologna</span>
            </div>

            <a
              className="btn btn-secondary"
              href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
              target="_blank"
              rel="noreferrer"
            >
              Vai su Google Maps
            </a>
          </div>

          <div className="map-wrap">
            <iframe
              title="Mappa La Buàt"
              src="https://www.google.com/maps?q=Via%20Magazzari%205%20Bologna&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>La Buàt</h3>
            <p>Cucina italiana a Bologna</p>
          </div>

          <div>
            <p>Via Magazzari 5, Bologna</p>
            <a href="https://www.instagram.com/la_buat_/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
