import React, { useEffect} from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  useEffect(() => {
    // Явное объявление переменной dataLayer
    window.dataLayer = window.dataLayer || [];

    // Загрузка скрипта Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-1SG4PNDKV4`;
    document.head.appendChild(script);

    // Функция gtag()
    window.dataLayer.push(function() {
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-1SG4PNDKV4');
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
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
      },[]);
      


      return (
        <div className="App">
      <Helmet>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      <header>
        <div id="particles"></div>
        <div className="info-text">
          <h1>Bulgass IT-academy</h1>
          <h3>Изучение компьютерных наук</h3>
          <div className="contact-info">  
          <p> Contact number: 220-041-943 &#9990; </p>
          <p>Contact whatsapp-number: 550-092-903<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-whatsapp" viewBox="0 -5 10 20">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg></p>


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
          <h1>Об академии</h1>
          <label for="css-modal-checkbox" className='glow-on-hover' type='checkbox'>Цены</label>
                  <input type="checkbox" id="css-modal-checkbox" />
                  <div class="cmc">
                      <div class="cmt">
                      <table class="table">
                      	<thead>
                      		<tr>
                      			<th>Наименование курсов</th>
                      			<th>Групповые курсы</th>
                      			<th>Индивидуальные курсы</th>
                      			<th>Интенсивные курсы</th>
                      		</tr>
                      	</thead>
                      	<tbody>
                      		<tr>
                      			<td>BS50</td>
                      			<td>10 000 сом</td>
                      			<td>12 000 сом</td>
                      			<td>18 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS60</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS61</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS70</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS71</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS80</td>
                      			<td>14 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS81</td>
                      			<td>14 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS90</td>
                      			<td>13 000 сом</td>
                      			<td>15 000 сом</td>
                      			<td>22 500 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS91</td>
                      			<td>13 000 сом</td>
                      			<td>15 000 сом</td>
                      			<td>22 500 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS100</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                          <tr>
                      			<td>BS101</td>
                      			<td>12 000 сом</td>
                      			<td>14 000 сом</td>
                      			<td>21 000 сом</td>
                      		</tr>
                      	</tbody>
                      </table>
                      </div>
                      <label for="css-modal-checkbox" class="css-modal-close"></label>
              </div>
              </div>

        <div className="card">
          <img src="bulgassLogo.jpeg" alt="Логотип BSW IT-academy" />
          <div className="info">
            <h1>Bulgass</h1>
            <p>Мы обучаем лучшим направлениям в IT индустрии.</p>
            <div>
          </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="header">
          <h1>Курсы</h1>
          <button className='glow-on-hover' onClick={()=> window.location.href = "https://bulgass-courses.netlify.app/"}>Узнать больше</button>
          <button className='glow-on-hover' onClick={()=> window.location.href = "https://bulgass-event-page.netlify.app/"}>Новости</button>
        </div>
        <div className="feature-cards">
          <div className="card">
            <div className="info">
              <h1>BS50 'Basics'</h1>
              <p>Вы начинающий в программировании и не знаете, с чего начать? Курс BS50 предназначен для новичков, где вы изучите основы компьютерных наук и другие интересные программы.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS60 'Introduction to Game Dev'</h1>
              <p>Вас всегда интересовало, как работают игры? Курс BS60 предлагает изучение основ разработки игр.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS61 'Advanced Game Dev'</h1>
              <p>После изучения основ разработки игр мы переходим к более сложным концепциям в этой области.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS70 'Web Development'</h1>
              <p>Хотите создавать потрясающие сайты и изучать, как работает веб-движок? Курс BS70 создан специально для вас.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS71 'Advanced Web Development'</h1>
              <p>Виртуализация, оркестровка, работа с серверами, а также различные архитектурные шаблоны и многое другое интересное вы изучите в курсе BS71.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS80 'Operating Systems'</h1>
              <p>Глубокое изучение работы компьютеров и их систем. В этом курсе вы изучите низкоуровневое и высокоуровневое программирование.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS90 'AI Course'</h1>
              <p>Если вы хотите создавать искусственный интеллект и изучать, как они работают, этот курс для вас.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS91 'Advanced AI'</h1>
              <p>Глубокое обучение — курс для тех, кто хочет стать великолепным в программировании искусственного интеллекта.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS100 'Cybersecurity (Systems administartion)'</h1>
              <p>Если вы хотите стать специалистом по кибербезопасности, вам нужно знать, что такое системное администрирование. В этом курсе вы изучите операционные системы Unix, модели OSI, основы подсетей и основы Kali Linux.</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h1>BS101 'Advanced Cybersecurity(ensuring system security)'</h1>
              <p>В этом курсе вы глубоко изучите Kali Linux, брандмауэры, различные типы кибератак и методы защиты систем от них.</p>
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

//done