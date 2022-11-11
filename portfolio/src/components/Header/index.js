import React, { useEffect } from "react";
const Header = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  useEffect(() => {
    document.title = (currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <a data-testid="link" href="/">
        <h2>Naferi</h2>
      </a>
      <nav className="text-center">
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
