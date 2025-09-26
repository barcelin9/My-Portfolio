function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#sobre">About Me</a></li>
          <li><a href="#tech">Tecnologies</a></li>
          <li><a href="#proj">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const header = ReactDOM.createRoot(document.getElementById("header"));
header.render(<Header />);

function Main() {
  return (
    <main id="sobre">
      <div className="card">
        <h1>Guilherme Barcelo</h1>
        <p>I'm a Fullstack developer. I'm coursing Software Engineering and I intend to be a professional developer.</p>
        <a href="Nãoveja/Sério/Currículo de Guilherme OFICIAL.docx" download>Download CV</a>
      </div>
      <div className="picture">
        <img src="img/images.jpeg" alt="Minha foto" />
      </div>
    </main>
  );
}

const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(<Main />);

function Tech() {
  return (
    <main id="tech">
      <h2>Tecnologies</h2>
      <div className="lista">
        <ul id="front">
          <h2>Frontend</h2>
          <li><img src="img/HTML5_logo_and_wordmark.svg.png" alt="HTML" /></li>
          <li><img src="img/CSS3_logo_and_wordmark.svg.png" alt="CSS" /></li>
          <li><img src="img/JavaScript-Logo.png" alt="JS" /></li>
          <li><img src="img/React-icon.svg.png" alt="React" /></li>
          <li><img src="img/Tailwind_CSS_Logo.svg.png" alt="Tailwind" /></li>
        </ul>
        <ul id="back">
          <h2>Backend</h2>
          <li><img src="img/Java_programming_language_logo.svg.png" alt="Java" /></li>
          <li><img src="img/Python-logo-notext.svg.png" alt="Python" /></li>
          <li><img src="img/pngimg.com - mysql_PNG9.png" alt="MySQL" /></li>
        </ul>
      </div>
    </main>
  );
}

const tech = ReactDOM.createRoot(document.getElementById("tech"));
tech.render(<Tech />);

function Projects() {
  return (
    <main id="proj">
      <h2>My Projects</h2>
      <div className="projetos">
        <div className="projs" id="ecommerce">
          <img src="img/mostrando-grafico-de-sinalizacao-de-carrinho-de-compras-online_53876-133967.jpg" alt="ecommerce" />
          <h2>E-commerce</h2>
          <p>This is a simple e-commerce made with a database, backend and frontend.</p>
          <a href="#">Show Website</a>
        </div>
        <div className="projs" id="lanchonete">
          <img src="img/design-de-banner-de-modelo-de-capa-de-facebook-de-menu-de-comida-e-restaurante_624457-3908.jpg" alt="restaurant" />
          <h2>Restaurant</h2>
          <p>This is a simple restaurant website, there is a menu and a contact page.</p>
          <a href="#">Show Website</a>
        </div>
      </div>
    </main>
  );
}

const projects = ReactDOM.createRoot(document.getElementById("projects"));
projects.render(<Projects />);

function Contact() {
  return (
    <form
      action="https://formsubmit.co/guilhermebarcn@gmail.com"
      method="POST"
      id="contact"
    >
      <h2>Contact me</h2>
      <div className="form">
        <input type="text" name="name" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="message" placeholder="Sua mensagem" required id="texto"></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://google.com" />

        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

const contact = ReactDOM.createRoot(document.getElementById("contact"));
contact.render(<Contact />);
