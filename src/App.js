import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  
  useEffect(() => {
    function handleScroll() {
      const scrollTopButton = document.querySelector('.scroll-top');
      if (window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
      } else {
        scrollTopButton.style.display = 'none';
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Helmet>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      <header>
        <div id="particles"></div>
        <div className="info-text">
          <h1>Bulgass IT-academy</h1>
          <h3>Exploring computer science</h3>
          <div className="contact-info">
            <p>Contact number: 550-09-29-03</p>


            <a href="#about" className="scroll"><i className="bx bxs-down-arrow"></i></a>
          </div>
        </div>
      </header>
      <section>
            <div className="social-links">
            <button className="social-icon" onClick={() => window.location.href = 'https://www.instagram.com/bulgass.it/'}>
               <i className="bx bxl-instagram-alt"></i>
            </button>
            <button className="social-icon" onClick={() => window.location.href = 'https://t.me/+ejlSjQzju0UyZTQy'}>
               <i className="bx bxl-telegram"></i>
            </button>
            </div>
      </section>
      <section id="about">
        <div className="header">
          <h1>About academy</h1>
          <a href= '#'>Contact Us</a>
        </div>

        <div className="card">
          <img src="bulgassLogo.jpeg" alt="Логотип BSW IT-academy" />
          <div className="info">
            <h1>This is Bulgass</h1>
            <p>We will explore the best ways of IT industry.</p>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="header">
          <h1>Courses</h1>
          <a href= '#'>See More</a>
        </div>
        <div className="feature-cards">
          <div className="card">
            <div className="info">
              <h1>BS50 'Basics'</h1>
              <p>Areyou a beginner in programming and you don't know which way to choose? BS50 is our course for beginners where you will explore basics of computer science and other cool programs.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS60 'Introduction to Game Dev'</h1>
              <p>Have you always wondered how games work? BS60 is a course where you will learn the basics of Game Development.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS61 'Advanced Game Dev'</h1>
              <p>Once you've covered the basics of game development, we move on to more advanced concepts in this area.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS70 'Web Development'</h1>
              <p>Do you want to create awesome sites and explore how the web engine works? BS70 is for you.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS71 'Advanced Web Development'</h1>
              <p>Virtualization, orchestration, working with servers, as well as various architectural patterns and many more interesting things you will explore in BS71.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS80 'Operating Systems'</h1>
              <p>Deep learning of how computers and their systems work. In this course you will explore low and high-level programming.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS90 'AI Course'</h1>
              <p>If you want to create AI and explore how they work, this course is for you.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS91 'Advanced AI'</h1>
              <p>Deep learning, a course for those who want to be brilliant in AI programming.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS100 'Cybersecurity (Systems administartion)'</h1>
              <p>If you want to be cybersecurity specialist, you need to now what system administartion is, in this course you will explore unix operating systems, OSI models, Basics of Subnetting and basics of Kali linux.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS101 'Advanced Cybersecurity(ensuring system security)'</h1>
              <p>In this course you will explore deeply Kali linux, Firewall, lots of kind of cyberattacks and how defend systems of them.</p>
            </div>
          </div>
        </div>
      </section>

      <button className="scroll-top" onClick={scrollToTop}>
        <img src="up.png" alt="Up Icon" />
      </button>
    </div>
  );
}

export default App;