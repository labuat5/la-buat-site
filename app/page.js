export default function Home() {
  return (
    <>
      <main className="site">
        <section className="hero">
          <div className="overlay" />
          <div className="heroContent">
            <p className="eyebrow">Via Magazzari 5 • Bologna</p>
            <h1>La Buàt per ogni momento</h1>
            <p className="subtitle">
              Colazioni, pranzo a buffet, pizza e apericena in un ambiente
              accogliente e facile da raggiungere.
            </p>

            <div className="buttons">
              <a
                className="btn btnPrimary"
                href="https://www.instagram.com/la_buat5/"
                target="_blank"
                rel="noreferrer"
              >
                Prenota su Instagram
              </a>

              <a
                className="btn btnSecondary"
                href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                target="_blank"
                rel="noreferrer"
              >
                Apri su Google Maps
              </a>
            </div>
          </div>
        </section>

        <section className="section intro">
          <div className="container narrow">
            <p className="eyebrow dark">Benvenuti</p>
            <h2>Un posto da vivere dalla mattina alla sera</h2>
            <p className="text">
              La Buàt nasce per offrirti un momento giusto in ogni parte della
              giornata: colazione, pranzo, pizza la sera e apericena in
              compagnia.
            </p>
          </div>
        </section>

        <section className="section services">
          <div className="container">
            <p className="eyebrow dark">Cosa trovi</p>
            <h2>Una proposta semplice e versatile</h2>

            <div className="grid">
              <div className="card">
                <div className="icon">☕</div>
                <h3>Colazioni</h3>
                <p>Per iniziare la giornata con calma e qualcosa di buono.</p>
              </div>

              <div className="card">
                <div className="icon">🍽️</div>
                <h3>Pranzo a buffet</h3>
                <p>Ogni giorno qualcosa di diverso con piatto del giorno.</p>
              </div>

              <div className="card">
                <div className="icon">🍕</div>
                <h3>Pizza</h3>
                <p>Una scelta perfetta per una cena semplice e conviviale.</p>
              </div>

              <div className="card">
                <div className="icon">🥂</div>
                <h3>Apericena</h3>
                <p>Per stare insieme in modo leggero, pratico e piacevole.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section menuSection">
          <div className="container narrow center">
            <p className="eyebrow light">Il menu</p>
            <h2>Il menu cambia ogni giorno</h2>
            <p className="text lightText">
              Passa a scoprirlo oppure scrivici su Instagram per avere più
              informazioni.
            </p>

            <a
              className="btn btnPrimary"
              href="https://www.instagram.com/la_buat5/"
              target="_blank"
              rel="noreferrer"
            >
              Scrivici ora
            </a>
          </div>
        </section>

        <section className="section location">
          <div className="container twoCols">
            <div>
              <p className="eyebrow dark">Dove siamo</p>
              <h2>Facile da raggiungere a Bologna</h2>
              <p className="text">
                Ci trovi in Via Magazzari 5, in zona San Donato. Un punto comodo
                per residenti, lavoratori, gruppi di amici e chi vuole fermarsi
                in un ambiente accogliente.
              </p>

              <div className="infoBox">
                <strong>La Buàt</strong>
                <span>Via Magazzari 5, Bologna</span>
              </div>

              <a
                className="btn mapBtn"
                href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                target="_blank"
                rel="noreferrer"
              >
                Vai su Google Maps
              </a>
            </div>

            <div className="mapWrap">
              <iframe
                title="Mappa La Buàt"
                src="https://www.google.com/maps?q=Via%20Magazzari%205%20Bologna&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerWrap">
            <div>
              <h3>La Buàt</h3>
              <p>Cucina italiana a Bologna</p>
            </div>

            <div className="footerLinks">
              <a
                href="https://www.instagram.com/la_buat5/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6efe7;
          color: #221914;
        }

        a {
          text-decoration: none;
        }

        .site {
          width: 100%;
        }

        .container {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .narrow {
          width: min(760px, calc(100% - 32px));
        }

        .center {
          text-align: center;
        }

        .section {
          padding: 78px 0;
        }

        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(180deg, rgba(20, 14, 11, 0.55), rgba(20, 14, 11, 0.72)),
            url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          color: white;
        }

        .overlay {
          position: absolute;
          inset: 0;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          width: min(860px, calc(100% - 32px));
          text-align: center;
        }

        .eyebrow {
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.88rem;
          opacity: 0.95;
        }

        .eyebrow.dark {
          color: #8c5733;
          opacity: 1;
        }

        .eyebrow.light {
          color: #f0d8c3;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 5.2rem);
          line-height: 0.97;
          font-weight: 800;
        }

        h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 1.2rem;
        }

        .subtitle {
          width: min(740px, 100%);
          margin: 22px auto 0;
          font-size: 1.08rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
        }

        .text {
          margin: 0;
          font-size: 1.03rem;
          line-height: 1.8;
          color: #554840;
        }

        .lightText {
          color: rgba(255, 255, 255, 0.84);
          margin-bottom: 24px;
        }

        .buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .btnPrimary {
          background: #a45b33;
          color: white;
        }

        .btnPrimary:hover {
          background: #8c4d2b;
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.12);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.26);
        }

        .btnSecondary:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .services {
          background: #fbf6f1;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 28px;
        }

        .card {
          background: white;
          border-radius: 22px;
          padding: 28px 22px;
          box-shadow: 0 10px 28px rgba(66, 41, 22, 0.08);
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .card p {
          margin: 0;
          color: #5d4f47;
          line-height: 1.7;
        }

        .menuSection {
          background: linear-gradient(180deg, #2a1c16 0%, #3a271f 100%);
          color: white;
        }

        .twoCols {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 28px;
          align-items: center;
        }

        .infoBox {
          margin: 24px 0;
          padding: 18px 20px;
          border-radius: 18px;
          background: #f1e3d5;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mapBtn {
          background: #a45b33;
          color: white;
        }

        .mapBtn:hover {
          background: #8c4d2b;
        }

        .mapWrap {
          border-radius: 22px;
          overflow: hidden;
          min-height: 420px;
          box-shadow: 0 10px 28px rgba(55, 34, 19, 0.12);
        }

        .mapWrap iframe {
          width: 100%;
          height: 100%;
          min-height: 420px;
          border: 0;
        }

        .footer {
          background: #1f1713;
          color: white;
          padding: 32px 0;
        }

        .footerWrap {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footer h3 {
          margin: 0 0 8px;
        }

        .footer p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
        }

        .footerLinks {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footerLinks a {
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 960px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .twoCols {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: 84vh;
          }
        }

        @media (max-width: 640px) {
          .section {
            padding: 64px 0;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 320px;
          }

          .mapWrap,
          .mapWrap iframe {
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
}
