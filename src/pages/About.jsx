import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Page</h1>

      <Outlet />
    </>
  );
};

export default About;
