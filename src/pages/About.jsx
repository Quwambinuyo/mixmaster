import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <h1>About Page</h1>
        <Link to="/">Home Page</Link>
        <br />
        <Link to="cocktail">Go to Cocktail</Link>
      </div>

      <Outlet />
    </>
  );
};

export default About;
