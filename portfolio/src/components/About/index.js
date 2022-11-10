import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
    </section>
  );
}

export default About;