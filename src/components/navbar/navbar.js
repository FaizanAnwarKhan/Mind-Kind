import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
        <nav>
          <div class="nav-wrapper blue">
            <a href="#" class="brand-logo" style={{marginLeft:"1%"}}>
              Mind Kind
            </a>
            <ul id="nav-mobile" class="right">
              <li>
                <a href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
     
  );
};

export default withRouter(Navbar);
