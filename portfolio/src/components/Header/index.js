import React from "react";

const categories = [
  {
    name: "Projects",
    description: "My code projects",
  },
  { name: "Front", description: "Front-end code projects" },
  { name: "Back", description: "Back-end code projects" },
 
];

const Header = () => {
    function categorySelected(name) {
        console.log(`${name} clicked`)
      }

  return (
    <header className="flex-row">
      <a href="/">
        <h2 >Naferi</h2>
      </a>
      <nav className="text-center">
        <ul className="flex-row">
          <li className="mx-2">
            {" "}
            <a href="#about">About</a>
          </li>
          <li to="/contact">
            <span>Contact</span>
          </li>
          <li className="mx-2"><a href="#resume">Resume</a></li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected(category.name)}>{category.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
