import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
        <div className="container-fluid">
            {/* <img src={BridgeLogo} alt="" width="" height="35" class="mt-1" /> */}
            <a href="/"><h3 className="logo-text">Eventings</h3></a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bread-crumbs"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar  me-auto mx-auto mb-0 mt-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex navbar navbar-nav">
                  <a href="/login" className="btn-outline-bridge">Login</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
