const Navbar = () => {
  return (
    <header className="header-white bcg-color">
      <nav className="navbar-split container">
        <a href="index.html" id="logo" className="bold">
          moja firma
        </a>
        <ul className="nav-list">
          <li>
            <a href="#about">o nas</a>
          </li>
          <li>
            <a href="#offer">oferta</a>
          </li>
          <li className="disabled">
            <a href="#contact">kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
