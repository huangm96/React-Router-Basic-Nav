import React from 'react';
import { Route, Link } from "react-router-dom"


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link className="navButton Home" to="/">
          Home
        </Link>
        <Link className="navButton About" to="/About">
          About
        </Link>
        <Link className="navButton Contact" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
