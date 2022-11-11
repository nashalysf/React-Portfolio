import React from 'react';
import resume1 from '../../assets/cover/resume1.jpg'
import resume2  from '../../assets/cover/resume2.jpg'

function Resume() {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <img src={resume1} className="my-2" style={{ width: "90%" }} alt="resume"/>
      <img src={resume2} className="my-2" style={{ width: "90%" }} alt="resume"/>
    </section>
  );
}

export default Resume;