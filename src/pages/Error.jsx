import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = ({ is404 = true }) => {
  return (
    <Wrapper>
      <div>
        {is404 ? (
          <>
            <img src={img} alt="not found" />
            <h3>Ohh!</h3>
            <p>We can't seem to find the page you're looking for.</p>
          </>
        ) : (
          <>
            <h3>Something went wrong</h3>
            <p>Please try again later.</p>
          </>
        )}
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
