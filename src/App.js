import './App.css';
import yo from './img/yo05.png'
import yo2 from './img/yo04.jpeg'
import documentcv from './documents/document.pdf'

function App() {
  return (
    <div className="App">

      <div className='wrapper' id='home' >
        <header>
          <nav className="navbar">
            <div className="brand">
              <h2>J<span>T</span></h2>
            </div>
            <ul className='menu' >
              <li><a className='active' href="index.html#home">Inicio</a></li>
              <li><a href="index.html#about">Sobre mí</a></li>
              <li><a href="index.html#portfolio">Portafolio</a></li>
              <li><a href="index.html#contact">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <main className='main' >
          <div className="info-content">
            <h1>Soy <span>José</span> Tejero</h1>
            <p className='description' >Desarrollador y programador nacido en México. Funcional, creativo y apasionado en los retos que se me presenten.</p>
            <a download href={documentcv}>
              <button className='download-cv'>
                Descargar CV
              </button>
            </a>
          </div>
          <div className='minibody' >
            <svg viewbox="0 0 50 50" width="50" height="50">
              <defs>
                <mask id="mask" x="0" y="0" width="100" height="49">
                  <rect x="0.5" y="0.5" width="49" height="49" fill="#fff"/>
                  <text x="20" text-anchor="middle" y="50" dy="0">J</text>
                  <text x="25" id="ltrV" text-anchor="middle" y="50" dy="0">T</text>
                  <text x="30" text-anchor="middle" y="50" dy="0">Z</text>
                </mask>
              </defs>
              <rect x="0.5" y="0.5" width="49" height="49" mask="url(#mask)" fill-opacity="1" fill="#E3DFD2"/>
            </svg>
            {/* <img src={yo} alt="José Tejero" /> */}
          </div>
        </main>
      </div>

      <div className="about" id='about' >
        <img src={yo2} alt="José Tejero" />
        <div className="about-info">
          <h2>Sobre mí</h2>
          <div className="divider"></div>
          <p>Soy graduado de la Licenciatura en Igeniería Electrónica, con área terminal en Instrumentación y Control. Posteriormente fui profesor de asignatura en la Universidad Tecnológica de Campeche.</p>
          <p>Entre la etapa del fin de la universidad y el principio del mundo laboral, estuve trabajando con amigos en programación de prototipos para concursos nacionales en el mundo de la robótica.</p>
          <p>Estoy a punto de encontrar mi camino.</p>
          <button className='download-cv' >Leer más</button>
        </div>
      </div>

      <div className="portfolio"  id='portfolio'>
        <div className="portfolio-headings">
          <h2>Mi portafolio</h2>
          <div className="divider"></div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-img-1"></div>
            <div className="card-title">
              <h2>API de Pokémon</h2>
            </div>
            <div className="card-projects-links">
              <a href="https://github.com/Jose-Tejero/pokeapi" target="_blank" rel='noreferrer'>
                <i class="fab fa-github"></i>
              </a>
              <a href="https://pokeapi-tejero.netlify.app" target="_blank" rel='noreferrer'>
                <i class="fas fa-globe-americas"></i>
              </a>
            </div>
            {/* <div className="project-details-content">
              <button className='project-details download-cv' >
                <a href="">Detalles</a>
              </button>
            </div> */}
          </div>

          <div className="card">
            <div className="card-img-2"></div>
            <div className="card-title">
              <h2>API de Rick and Morty</h2>
            </div>
            <div className="card-projects-links">
              <a href="https://github.com/Jose-Tejero/rickymortyapi" target="_blank" rel='noreferrer'>
                <i class="fab fa-github"></i>
              </a>
              <a href="https://rickandmorty-tejero.netlify.app" target="_blank" rel='noreferrer'>
                <i class="fas fa-globe-americas"></i>
              </a>
            </div>
            {/* <div className="project-details-content">
              <button className='project-details download-cv' >
                <a href="">Detalles</a>
              </button>
            </div> */}
          </div>
          
          <div className="card">
            <div className="card-img-3"></div>
            <div className="card-title">
              <h2>API del estado del clima</h2>
            </div>
            <div className="card-projects-links">
              <a href="https://github.com/Jose-Tejero/theWeatherApp" target="_blank" rel='noreferrer'>
                <i class="fab fa-github"></i>
              </a>
              <a href="https://forecast-tejero.netlify.app/" target="_blank" rel='noreferrer'>
                <i class="fas fa-globe-americas"></i>
              </a>
            </div>
            {/* <div className="project-details-content">
              <button className='project-details download-cv' >
                <a href="">Detalles</a>
              </button>
            </div> */}
          </div>
        </div>

        <div className="contact-section" id='contact'>
          <div className="contact-headings">
            <h2>Contacto</h2>
            <div className="divider"></div>
            <div className="division">
              <div className="number-email">
                <h3>Llamada desde México:</h3>
                <p>93 8195 6195</p>
                <br />
                <h3>Desde cualquier parte del mundo:</h3>
                <p>+52 1 93 8195 6195</p>
              </div>
              <div className="github-linkedin">
                <h3>Sígueme en:</h3>
                <div className="card-projects-links">
                  <a href="https://github.com/Jose-Tejero/" target="_blank" rel='noreferrer'>
                    <i class="fab fa-github"></i>
                  </a>                
                  <a href="https://www.linkedin.com/in/jose-tejero-93b9ba124/" target="_blank" rel='noreferrer'>
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <h3>Correo electrónico:</h3>
                <p>j_jtejero@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
