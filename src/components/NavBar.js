import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Call the .map method on the "links" array, iterating over it and applying a function, then returns a new array. the link fucntion turns each link string into a react "<a>" or "anchor" element
  const navLinks = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{navLinks}</nav>;
}

export default NavBar;
