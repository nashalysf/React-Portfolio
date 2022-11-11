import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [categories] = useState([
    {
      name: "Front",
      description: "Front-end code projects",
    },
    {
      name: "Back",
      description: "Back-end code projects",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected = {resumeSelected}
        setResumeSelected = {setResumeSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
       
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
