import React, { useEffect, useState } from "react";
import "./App.css";

const Portfolio = () => {
  const [transform, setTransform] = useState("scale(1) translateY(0px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define the gap after which scaling should happen
      const gapThreshold = 200; // When scrolling past 300px
      const maxScale = 1; // Maximum scale value (start size)
      const minScale = 0.6; // Minimum scale value (end size)

      // Calculate scale based on scroll position
      let scaleValue = Math.max(
        minScale,
        Math.min(maxScale - (scrollPosition - gapThreshold) / 200, maxScale)
      );

      console.log("scrollPosition", scrollPosition);
      console.log("scalevalue:", scaleValue);

      // Apply scaling and translation based on scroll
      setTransform(`scale(${scaleValue})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-content">
          <h1
            className="header-name"
            style={{
              transform: transform,
            }}
          >
            Maria
            <br />
            Nechaeva
          </h1>
          <div className="header-details">
            <p className="header-description">
              Experienced product designer with a passion for creating intuitive
              user experiences and solving complex problems. Committed to
              continuous learning and personal growth. Open to new opportunities
              in the design field. Based in San Francisco.
            </p>
            <a href="#projects" className="nav-link-projects">
              <span className="arrow-icon left">
                <i className="fas fa-circle-arrow-down"></i>
              </span>
              Explore projects
            </a>
          </div>
        </div>
      </header>

      <nav className="nav-links">
        <a
          href="https://drive.google.com/file/d/1nDWUnQwDE-Ve50OkArY_Fyyh8b7iVeiq/view?usp=sharing"
          className="nav-link"
        >
          Resume
        </a>
        <a href="https://www.linkedin.com/in/maria-nec/" className="nav-link">
          LinkedIn
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      <main>
        <section id="projects" className="project-section">
          <div className="project-image-container">
            <img
              src="/images/skyeng-home-page.webp"
              alt="Skyeng Home Page"
              className="project-image"
            />
          </div>
          <div className="project-content">
            <h2 className="project-title">Skyeng Home Page</h2>
            <p className="project-description">
              Redesigned a home page within a limited time frame and with
              limited resources, which increased a page conversion rate by 30%
            </p>
            <a href="https://skyeng.ru/" className="project-link">
              See it live
              <span className="arrow-icon">
                <i class="fas fa-circle-arrow-right"></i>
              </span>
            </a>
          </div>
        </section>

        <section className="project-multi-section">
          <div className="project-content">
            <div className="project-image-container">
              <img
                src="/images/growth-experiments.webp"
                alt="Skyeng & Skysmart Blogs"
                className="project-image"
              />
            </div>
            <h2 className="project-title">Onboarding Growth Experiments</h2>
            <p className="project-description">
              Launched 5+ experiments and improvements on the onboarding flow
            </p>
            <p className="case-study-label">Case study coming soon</p>
          </div>

          <div className="project-content">
            <h2 className="project-title">Skyeng & Skysmart Blogs</h2>
            <p className="project-description">
              Improved user experience for 150k+ users by redesigning an
              educational blog and tripled conversion rate
            </p>
            <p className="case-study-label">Case study coming soon</p>
            <div className="project-image-container">
              <img
                src="/images/premium-english-lessons.webp"
                alt="Skyeng & Skysmart Blogs"
                className="project-image"
              />
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="project-image-container">
            <img
              src="/images/japanese-textbook.webp"
              alt="Interactive Japanese Textbook"
              className="project-image"
            />
          </div>
          <div className="project-content">
            <h2 className="project-title">Interactive Japanese Textbook</h2>
            <p className="project-description">
              Worked on an end-to-end design from concept development to the
              launch
            </p>
            <a
              href="https://bureau.ru/books/japanese/demo/"
              className="project-link"
            >
              See it live
              <span className="arrow-icon">
                <i class="fas fa-circle-arrow-right"></i>
              </span>
            </a>
          </div>
        </section>

        <div id="contact" className="contact-section">
          <p className="contact-greeting">Drop a line to get in touch</p>
          <a href="mailto:mariaaa.nec@gmail.com" className="contact-email">
            mariaaa.nec@gmail.com
          </a>
        </div>

        <footer className="footer">
          <span>© Maria Nechaeva</span>
          <a href="#top" className="footer-link">
            Back to top
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
