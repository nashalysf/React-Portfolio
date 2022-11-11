import React from 'react';
import Projects from '../Projects';



function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <Projects category={currentCategory.photos} />
    </section>
  );
}
export default Portfolio;
