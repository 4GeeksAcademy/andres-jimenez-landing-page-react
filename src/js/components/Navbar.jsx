export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black mb-4">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Start Boostrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-auto me-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};