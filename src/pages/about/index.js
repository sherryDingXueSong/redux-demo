import React from "react";
import { Link } from "react-router-dom";

const About = props => {
  return (
    <div>
      <h1>This is About page</h1>
      <Link to="/about/a">component A</Link>
      <Link to="/about/b">component B</Link>
      <Link to="/about/c">component C</Link>
      <hr />
      {props.children}
    </div>
  );
};

export default About;
