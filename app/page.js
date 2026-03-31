export default function Home() {
  return (
    <>
      <main className="site">
        <header className="topbar">
          <div className="container navWrap">
            <div className="brand">La Buàt</div>
            <nav className="navLinks">
              <a href="#info">Info</a>
              <a href="#location">Dove siamo</a>
              <a href="#gallery">Gallery</a>
              <a href="#contacts">Contatti</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="heroOverlay" />
          <div className="container heroInner">
            <div className="heroCard">
              <h1>La Buàt</h1>
              <p className="heroKicker">dalla mattina alla sera</p>
              <p className="heroText">
                Colazioni, pranzo a buffet con piatto del giorno, pizza e
                apericena in un ambiente accogliente e facile da raggiungere a
                Bologna.
              </p>
              <div className="heroButtons">
                <a
                  className="btn btnPrimary"
                  href="https://www.instagram.com/la_buat5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PRENOTA QUI
                </a>
                <a
                  className="btn btnGhost"
                  href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                  target="_blank"
                  rel="noreferrer"
                >
                  APRI SU MAPS
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="info" className="section introSection">
          <div className="container infoGrid">
            <div className="imageCard">
              <img
                src="https://static.wixstatic.com/media/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg"
                alt="Ingresso La Buàt"
              />
            </div>

            <div className="textCard">
              <span className="sectionLabel">Info</span>
              <h2>Un nuovo punto di ritrovo a Bologna</h2>
              <p className="miniMeta">Via Magazzari 5 • San Donato</p>
              <p>
                La Buàt è un locale pensato per stare bene, senza complicazioni.
                Un ambiente accogliente, informale e curato, ideale per una
                colazione tranquilla, un pranzo pratico o una serata in
                compagnia.
              </p>
              <p>
                Perfetto per residenti, lavoratori, universitari e gruppi di
                amici che cercano un posto comodo, conviviale e facile da
                raggiungere.
              </p>
              <div className="inlineButtons">
                <a
                  className="textBtn"
                  href="tel:+393342636977"
                >
                  Chiama ora
                </a>
                <a
                  className="textBtn"
                  href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                  target="_blank"
                  rel="noreferrer"
                >
                  Come arrivare
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section moodSection">
          <div className="container narrow center">
            <h2>Il posto giusto per ogni momento</h2>
            <p>
              Che sia una colazione, un pranzo veloce, una pizza la sera o un
              apericena in compagnia, La Buàt è uno di quei posti in cui si torna
              volentieri.
            </p>
          </div>
        </section>

        <section className="section serviceSection">
          <div className="container">
            <div className="serviceGrid">
              <div className="serviceCard">
                <h3>Colazioni</h3>
                <p>Per iniziare la giornata con calma e qualcosa di buono.</p>
              </div>
              <div className="serviceCard">
                <h3>Pranzo a buffet</h3>
                <p>Ogni giorno proposte diverse con piatto del giorno.</p>
              </div>
              <div className="serviceCard">
                <h3>Pizza</h3>
                <p>Una scelta semplice e conviviale per pranzo o cena.</p>
              </div>
              <div className="serviceCard">
                <h3>Apericena</h3>
                <p>Il modo giusto per stare insieme senza fretta.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="section locationSection">
          <div className="container locationGrid">
            <div className="locationText">
              <span className="sectionLabel">Posizione</span>
              <h2>Facile da raggiungere</h2>
              <p>
                La Buàt si trova in Via Magazzari 5 a Bologna, in zona San
                Donato. Una posizione comoda per chi vive in quartiere, per chi
                lavora in zona e per chi vuole fermarsi in un ambiente rilassato.
              </p>
              <p>
                Per chi parte dal Bar Irnerio 20 Cafè è disponibile anche una
                navetta diretta.
              </p>
              <a
                className="btn btnDark"
                href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna"
                target="_blank"
                rel="noreferrer"
              >
                VAI SU GOOGLE MAPS
              </a>
            </div>
            <div className="mapCard">
              <iframe
                title="Mappa La Buàt"
                src="https://www.google.com/maps?q=Via%20Magazzari%205%20Bologna&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallerySection">
          <div className="container">
            <div className="galleryGrid">
              <img
                src="https://static.wixstatic.com/media/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg"
                alt="Esterno La Buàt"
              />
              <img
                src="https://static.wixstatic.com/media/11062b_5cba97f1a4454985abf7a64f92f4e3a2~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_5cba97f1a4454985abf7a64f92f4e3a2~mv2.jpg"
                alt="Tavoli La Buàt"
              />
              <img
                src="https://static.wixstatic.com/media/11062b_ea976e86df114d77b4f70f4dcc3b6c16~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ea976e86df114d77b4f70f4dcc3b6c16~mv2.jpg"
                alt="Atmosfera La Buàt"
              />
            </div>
          </div>
        </section>

        <section id="contacts" className="section contactSection">
          <div className="container narrow center">
            <h2>Contattaci</h2>
            <p>
              Per prenotazioni e informazioni puoi scriverci su Instagram oppure
              chiamare direttamente il locale.
            </p>
            <div className="heroButtons contactButtons">
              <a
                className="btn btnPrimary"
                href="https://www.instagram.com/la_buat5/"
                target="_blank"
                rel="noreferrer"
              >
                INSTAGRAM
              </a>
              <a className="btn btnDark" href="tel:+393342636977">
                334 263 6977
              </a>
              <a className="btn btnGhostDark" href="mailto:labuatcucinaitaliana@gmail.com">
                EMAIL
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerGrid">
            <div>
              <h3>La Buàt</h3>
              <p>Via Magazzari 5, Bologna</p>
              <p>Cucina italiana dalla mattina alla sera</p>
            </div>
            <div className="footerLinks">
              <a href="https://www.instagram.com/la_buat5/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Via+Magazzari+5+Bologna" target="_blank" rel="noreferrer">
                Google Maps
              </a>
              <a href="mailto:labuatcucinaitaliana@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f4efe8;
          color: #231914;
        }
        a { text-decoration: none; }
        img { display: block; width: 100%; }
        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }
        .narrow { width: min(760px, calc(100% - 32px)); }
        .center { text-align: center; }
        .section { padding: 82px 0; }

        .topbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 20;
          padding: 18px 0;
        }
        .navWrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }
        .brand {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
        }
        .navLinks {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }
        .navLinks a {
          color: rgba(255,255,255,0.92);
          font-size: 0.95rem;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: url('https://static.wixstatic.com/media/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg/v1/fill/w_1903,h_1068,al_c,q_90,enc_avif,quality_auto/11062b_e0a95f8e9cce43fd85d3fd867ad97ab3~mv2.jpg') center/cover no-repeat;
        }
        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(17,12,10,0.45) 0%, rgba(17,12,10,0.70) 100%);
        }
        .heroInner {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .heroCard {
          text-align: center;
          color: white;
          max-width: 760px;
          padding: 40px 24px;
        }
        .heroCard h1 {
          margin: 0;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.95;
          font-weight: 800;
        }
        .heroKicker {
          margin: 18px 0 0;
          font-size: clamp(1.2rem, 2.4vw, 1.8rem);
          font-weight: 500;
          color: #f5d6bf;
        }
        .heroText {
          margin: 22px auto 0;
          font-size: 1.06rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.9);
          max-width: 680px;
        }

        .heroButtons {
          margin-top: 30px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: 0.2s ease;
        }
        .btnPrimary {
          background: #a55c34;
          color: white;
        }
        .btnPrimary:hover { background: #8f4e2c; }
        .btnGhost {
          background: rgba(255,255,255,0.12);
          color: white;
          border: 1px solid rgba(255,255,255,0.28);
        }
        .btnGhost:hover { background: rgba(255,255,255,0.18); }
        .btnDark {
          background: #2d1f18;
          color: white;
        }
        .btnDark:hover { background: #201611; }
        .btnGhostDark {
          background: transparent;
          color: #2d1f18;
          border: 1px solid #2d1f18;
        }

        .introSection { background: #f4efe8; }
        .infoGrid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .imageCard img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(56,36,21,0.12);
        }
        .textCard h2,
        .moodSection h2,
        .locationText h2,
        .contactSection h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.05;
        }
        .sectionLabel {
          display: inline-block;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8c5733;
          font-size: 0.9rem;
        }
        .miniMeta {
          margin: 0 0 18px;
          color: #7e6e64;
          font-weight: 600;
        }
        .textCard p,
        .moodSection p,
        .locationText p,
        .contactSection p {
          margin: 0 0 16px;
          line-height: 1.8;
          color: #544840;
          font-size: 1.03rem;
        }
        .inlineButtons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 18px;
        }
        .textBtn {
          color: #8c5733;
          font-weight: 700;
        }

        .moodSection {
          background: linear-gradient(180deg, #2a1c16 0%, #392720 100%);
          color: white;
        }
        .moodSection h2 { color: white; }
        .moodSection p { color: rgba(255,255,255,0.86); }

        .serviceSection { background: #fbf7f3; }
        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .serviceCard {
          background: white;
          border-radius: 22px;
          padding: 28px 22px;
          box-shadow: 0 10px 28px rgba(56,36,21,0.08);
        }
        .serviceCard h3 {
          margin: 0 0 10px;
          font-size: 1.2rem;
        }
        .serviceCard p {
          margin: 0;
          line-height: 1.7;
          color: #5b4f48;
        }

        .locationSection { background: #fffaf5; }
        .locationGrid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 30px;
          align-items: center;
        }
        .mapCard {
          overflow: hidden;
          border-radius: 24px;
          min-height: 430px;
          box-shadow: 0 10px 30px rgba(56,36,21,0.12);
        }
        .mapCard iframe {
          width: 100%;
          height: 100%;
          min-height: 430px;
          border: 0;
        }

        .gallerySection { background: #f4efe8; }
        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .galleryGrid img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(56,36,21,0.08);
        }

        .contactSection { background: #fbf7f3; }
        .contactButtons { margin-top: 26px; }

        .footer {
          background: #1f1713;
          color: white;
          padding: 34px 0;
        }
        .footerGrid {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }
        .footer h3 {
          margin: 0 0 8px;
        }
        .footer p {
          margin: 0 0 6px;
          color: rgba(255,255,255,0.82);
        }
        .footerLinks {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footerLinks a {
          color: rgba(255,255,255,0.9);
        }

        @media (max-width: 980px) {
          .infoGrid,
          .locationGrid {
            grid-template-columns: 1fr;
          }
          .serviceGrid,
          .galleryGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .navLinks {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .section { padding: 64px 0; }
          .hero { min-height: 88vh; }
          .heroButtons {
            flex-direction: column;
            align-items: center;
          }
          .btn {
            width: 100%;
            max-width: 320px;
          }
          .serviceGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }
          .mapCard,
          .mapCard iframe {
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
}
