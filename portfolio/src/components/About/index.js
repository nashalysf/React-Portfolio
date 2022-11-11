import React from 'react';
import coverImage from "../../assets/cover/cover-image.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <p>I'm currently a student of the Art School of P.R., Escuela de Artes Plásticas & Diseño (EAPD). I'm a Junior Designer & a freelancer with logo  & branding experience, character design experience & eager to learn about UX & UI design.</p>
      <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" />
    </section>
  );
}

export default About;