import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { CartWidget } from "../cartWidget/CartWidget";
export const NavBar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning text-center">
          <div className="container justify-content-evenly bg-warning">
            <a className="navbar-brand" href="#">
              WARHOLIANA
            </a>
            <div className="d-flex text-center ">
              <ul className="navbar-nav">
                <li className="nav-item m-3">
                  <a className="nav-link" href="">
                    Porfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link m-3" href="">
                    Tienda
                  </a>
                </li>
                <li>
                  <a className="nav-link m-3" href="">
                    Contacto
                  </a>
                </li>
              </ul>
              <CartWidget />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
