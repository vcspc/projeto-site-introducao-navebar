export default function Home() {
  return (
    <>
      <header className="cabecalho">
        <img className="logo-cabecalho" src="/images/logo.svg" alt="logo" />
        <nav>
          <ul className="menu-nav">
            <li><a href="#" className="item">ENTRAR</a></li>
            <li><a href="#" className="item">PREÇOS</a></li>
            <li><a href="#" className="item">RECURSOS</a></li>
            <li><a href="#" className="item">PRODUTO</a></li>
          </ul>
        </nav>
      </header>

      <section className="box-corpo">
        <div className="box-texto">
          <div className="box-titulo">
            <div className="circulo-texto">
              <p className="texto-novo">Novo</p>
            </div>
            <p className="texto-dashboard">Dashboard Monográfico</p>
          </div>

          <p className="texto-destaque">Insights poderosos sobre sua equipe</p>
          <p className="texto-descricao">Planejamento de projetos e controle de tempo para equipes ágeis</p>

          <div className="box-button">
            <button id="demo-button">Agende uma demonstração</button>
            <p className="texto-descricao-button">Clique para demosntração</p>
          </div>
        </div>

        <div className="box-ilustracao">
          <img className="ilustracao" src="/images/illustration-devices.svg" alt="ilustração de um notebook e um smartphone" />
        </div>
      </section>

      <footer></footer>
    </>
  );
}
