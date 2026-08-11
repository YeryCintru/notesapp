import "./App.css";

const images = [
  {
    src: "/img/ChatGPT Image 11 ago 2026, 13_32_04.png",
    caption: "En el coche, donde los viajes y las aventuras nos esperan.🚗",
  },
  {
    src: "/img/WhatsApp Image 2026-08-01 at 21.56.14.jpeg",
    caption: "En el sofá, donde las risas y los abrazos son nuestro hogar.🏠",
  },
  {
    src: "/img/WhatsApp Image 2026-08-01 at 22.00.44.jpeg",
    caption: "En Torrevieja, con el mar de testigo y la brisa en el pelo.🏖️",
  },
  {
    src: "/img/WhatsApp Image 2026-08-11 at 13.40.05 (1).jpeg",
    caption: "En mi graduación, con orgullo y contigo a mi lado.🎓",
  },
  {
    src: "/img/WhatsApp Image 2026-08-11 at 13.40.05.jpeg",
    caption: "En el Monasterio de Piedra, descubriendo un rincón de cuento 🕊️",
  },
  {
    src: "/img/WhatsApp Image 2026-08-11 at 13.40.06 (1).jpeg",
    caption: "En Zaragoza, juntos entre historia y atardeceres.🌆",
  },
  {
    src: "/img/WhatsApp Image 2026-08-11 at 13.40.06 (2).jpeg",
    caption: "En Ordesa, rodeados de montañas y magia natural.⛰️",
  },
  {
    src: "/img/WhatsApp Image 2026-08-11 at 13.40.06.jpeg",
    caption: "En París, entre luces y besos bajo la Torre Eiffel.🗼",
  },
];

function App() {
  return (
    <div className="App greeting-page">
      <nav className="site-nav">
        <a href="#home">Inicio</a>
        <a href="#gallery">Fotos</a>
        <a href="#message">Mensaje</a>
      </nav>

      <main id="home" className="hero-card">
        <div className="hero-overlay" />
        <div className="hero-stars" />
        <div className="hero-content">
          <span className="subtitle">Un año juntos</span>
          <h1>💝Feliz aniversario, mi amor💝</h1>
          <p>
            Gracias por cada abrazo, cada sonrisa y cada momento compartido.
            Eres mi alegría, mi calma y mi mejor compañía aunque también mis riñás jij.
          </p>
          <a className="hero-link" href="#gallery">
            Ver recuerdos
          </a>
        </div>
      </main>

      <section id="gallery" className="gallery-section">
        <div className="section-title">
          <span>Galería</span>
          <h2>Recuerdos inolvidables</h2>
        </div>

        <div className="gallery">
          {images.map((photo, index) => (
            <figure className="gallery-item" key={index}>
              <img src={encodeURI(photo.src)} alt={`Foto especial ${index + 1}`} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="message" className="message-card">
        <div className="message-badge">1 Año</div>
        <h2>Por muchos más</h2>
        <p>
          💘Por fin hemos cumplido un año después de todo el tiempo que nos conocemos. Ha sido un año lleno de aventuras, risas y momentos inolvidables y creo que hemos crecido mucho como pareja y personas desde que empezamos.💘 <br />
          Aunque hallamos pasado un año un poco dificil, por los estudios y demás hemos tenido tiempo para pasárnoslo bien y hacer muchas cosas chulas, por lo que estoy muy contento y satisfecho a tu lado.
          Te quiero y te amo mucho y espero tener muchos más a tu lado.
        </p>
        <p className="message-small">
          Eres mi persona favorita, y esta página es solo una pequeña muestra de
          lo mucho que te amo.
        </p>
      </section>
    </div>
  );
}

export default App;
