import './App.css';
import yo from './img/imim.png'
import yo2 from './img/yo.jpeg'

function App() {
  return (
    <div className="App">

    <div className='wrapper'>
      <header>
        <nav className="navbar">
          <div className="brand">
            <h2>J<span>T</span></h2>
          </div>
          <ul className='menu' >
            <li><a className='active' href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className='main' >
        <div className="info-content">
          <h1>Soy <span>José</span> Tejero</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit consequuntur qui laboriosam dolorem sapiente, beatae iste, eum labore voluptatem expedita ratione sint. Repellendus cumque iste illo esse, cupiditate ad?</p>
          <a download href="#">
            <button className='download-cv'>
              Descargar CV
            </button>
          </a>
        </div>
        <img src={yo} alt="José Tejero picture" />
      </main>
    </div>

    <div className="about">
      <img src={yo2} alt="José Tejero image" />
      <div className="about-info">
        <h2>Sobre mí</h2>
        <div className="divider"></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta illo ab fugiat esse incidunt voluptas nam deserunt neque sint quia distinctio porro provident nemo, corporis beatae. Atque cupiditate distinctio nisi!</p>
        <button className='download-cv' >Leer más</button>
      </div>
    </div>

    <div className="portfolio">
      <div className="portfolio-headings">
        <h2>Mi portafolio</h2>
        <div className="divider"></div>
      </div>

    <div className="container">
      <div className="card">
        <div className="card-img"></div>
        <div className="card-tittle">
          <h2>Descripción del proyecto</h2>
        </div>
        <div className="proyects-links">
          <a href="">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    </div>

    </div>
  );
}

export default App;
