import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{

    const scriptParticles = document.createElement('script');
    scriptParticles.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'
    scriptParticles.async = true;
    document.body.appendChild(scriptParticles);

    const scriptCustom = document.createElement('script');
    scriptCustom.async = true;
    document.body.appendChild(scriptCustom);

    return() => {
      document.body.removeChild(scriptParticles);
      document.body.removeChild(scriptCustom);
    };
  }, []);

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(()=>{
    function handleScroll(){
      const scrollTopButton = document.querySelector('.scroll-top');
      if (window.pageYOffset > 200){
        scrollTopButton.style.display = 'block';
      }else{
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
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </Helmet>
        <header>
          <div id="particles"></div>
             <div className="info-text">
                <h1>Bulgass IT-academy</h1>
                <h3>Exploring computer since</h3>
                <div className="contact-info">
                  <p>Contact number: 550-09-29-03</p>
                  <div className="social-links">
                    <a href="#" className="social-icon">
                      <i className='bx bxl-facebook-circle'></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className='bx bxl-twitter'></i>
                    </a>
                    <a href='#' className='social-icon'>
                      <i className='bx bxl-instagram-alt'></i>
                    </a>
                  </div>
                <a href="#about" class="scroll"><i class='bx bxs-down-arrow'></i></a>
                </div>
          </div>
        </header>

        <section id='about'>
          <div className='header'>
            <h1>About academy</h1>
            <a href="#">Contact Us</a>
          </div>

          <div className='card'>
            <img src='bulgassLogo.jpeg' alt='Логотип BSW IT-academy'></img>
            <div className='info'>
              <h1>This is Bulgass</h1>
              <p>We will explore the best ways of IT industry.</p>
            </div>
          </div>
        </section>

        <section id='features'>
          <div className='header'>
            <h1>Courses</h1>
            <a href='#'>See More</a>
          </div>
          <div className='feature-cards'>
            <div className='card'>
              <div className='info'>
                <h1>BS50 'Basics'</h1>
                <p>
                  Are you begginer in programming and you dont`t know which way to choose? 
                  BS50 our course for begginers where you will explore basics of computer since and another cool programs.
                </p>
              </div>
            </div>
          <div className='card'>
            <div className='info'>
              <h1>BS60 'Intrudaction to Game Dev'</h1>
              <p>Have you always wondered how games works?
                 BS60 courses where you will learn the basics of Game Development.</p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS61 'Advanced Game Dev'</h1>
              <p>Once you've covered the basics game development, we move on to more advanced concepts in this area.</p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS70 'Web Development'</h1>
              <p>You want to create awesome sites and explore how web engine works, so BS70 for you.</p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS71 'Advanced web development'</h1>
              <p>Virtualization, arkestration, working with servers, as well as various architectural patterns and many more interesting things
                you will explore in BS71.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS80 'Operaiting Systems'</h1>
              <p>Deep learning of how computers and their systems works, in this course you will explore low and high level programming.</p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS90 'AI course'</h1>
              <p>If you want to create AI, explore how they works this course for you.</p>
            </div>
          </div>
          <div className='card'>
            <div className='info'>
              <h1>BS91 'Advanced AI'</h1>
              <p>Deep learning, course who want to be briliant in AI way of programming</p>
            </div>
          </div>
        </div>
        </section>

        <button className='scroll-top' onClick={scrollToTop}>
          <img src='up.png' alt='Up Icon'></img>
        </button>
    </div>
    
  );
}

export default App;
