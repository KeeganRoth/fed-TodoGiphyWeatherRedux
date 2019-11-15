import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Welcome</Link> | <Link to="/gifs">Gifs</Link> |&nbsp;
      <Link to="/todos">Todos</Link>
    </nav>
  );
};

export default NavBar;
