import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State} from "../../redux/index";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<string>('');

  const { logout } = bindActionCreators(actionCreators, dispatch);

  const authenticated = useSelector((state: State) => state.auth.authenticated);

  const logOut = () => {
    logout();
    setRedirect('/');
  }

  return redirect ? <Redirect to={redirect} /> : (
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
                {
                  authenticated 
                      // ? <button className="text-btn" onClick={logOut}>Logout</button> 
                      ? <a href="/" onClick={logOut} className="btn-link">Logout</a>
                      : <a href="/login" className="btn-outline-bridge">Login</a>
                }
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
