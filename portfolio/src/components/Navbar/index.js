import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Example = (props) => {
  return (
    <div>
      <nav>
      <Link className="messier navbar-brand navbar navbar-expand-lg navbar-light bg-light" to="/">
      CLAIRE VANDENBERG
      </Link>

      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="/about">
        ABOUT
      </Link>

      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="/portfolio">
        PORTFOLIO
      </Link>


      <Link className="navbar-brand navbar navbar-expand-lg navbar-light bg-light"  to="contact">
        CONTACT
      </Link>
      
      </nav>
    </div>
  );
}

export default Example;

