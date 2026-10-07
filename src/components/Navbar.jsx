import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Tu Logo VolTech */}
        <a href="/">
          <img src="/img/VolTech Logo - Sin texto.png" alt="VolTech Logo" style={{ height: '50px' }} />
        </a>
        
        {/* Buscador central */}
        <form className="d-flex w-50">
          <input className="form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Buscar</button>
        </form>

        {/* Botones de usuario */}
        <div>
          <button className="btn btn-outline-primary me-2">Iniciar Sesión</button>
          <button className="btn btn-primary">Registrarse</button>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-top border-bottom">
        <div className="container d-flex justify-content-center">
          <ul className="navbar-nav fw-bold d-flex align-items-center flex-row gap-4">
            <li className="nav-item"><a className="nav-link text-dark" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-muted" href="/productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link text-muted" href="/nosotros">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link text-muted" href="/blogs">Blogs</a></li>
            <li className="nav-item"><a className="nav-link text-muted" href="/contacto">Contacto</a></li>
            <li className="nav-item ms-3">
              <button className="btn btn-success fw-bold px-4">
                🛒 Carrito
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;