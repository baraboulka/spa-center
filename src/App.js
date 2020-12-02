import "./App.scss";

import UpperBar from "./components/basic/upper-bar";
import Card from "./components/basic/card";
import Carousel from "./components/basic/carousel";

import AboutImg from "./images/about_introduction.jpg";
import IntrodCardImage1 from "./images/introduction-cards/introduction_card1.jpg";
import IntrodCardImage2 from "./images/introduction-cards/introduction_card2.jpg";
import IntrodCardImage3 from "./images/introduction-cards/introduction_card3.jpg";

function App() {
  const cosmeticsCards = [
    {
      image: IntrodCardImage1,
      alt: "Close to nature",
      title: "Close to nature",
      desc:
        "In our work we use environmental-friendly cosmetics only. It is vitally important for us to care not only for you, but for the nature as well.",
    },
    {
      image: IntrodCardImage2,
      alt: "Care for people",
      title: "Care for people",
      desc:
        "In our work we use environmental-friendly cosmetics only. It is vitally important for us to care not only for you, but for the nature as well.",
    },
    {
      image: IntrodCardImage3,
      alt: "Ultra-tech",
      title: "Ultra-tech",
      desc:
        "In our work we use environmental-friendly cosmetics only. It is vitally important for us to care not only for you, but for the nature as well.",
    },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <UpperBar />
          <div className="header__slider">
            <h1>Welcome to sustainable spa oasis!</h1>
            <button className="btn btn-order btn-order__slider">
              Find time for yourself!
            </button>
          </div>
          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0.923 L0.083,0.942 C0.167,0.963,0.333,0.999,0.5,1 C0.667,0.999,0.833,0.963,0.917,0.942 L1,0.923 L1,0 L0.917,0 C0.833,0,0.667,0,0.5,0 C0.333,0,0.167,0,0.083,0 L0,0"></path>
            </clipPath>
          </svg>
        </header>
        <main className="main-content">
          <section className="about-overview">
            <div className="about-overview__text-box">
              <h2>Peaceful and harmonious</h2>
              <p>
                We have created a spa center where everyone could feel the
                desired inner peace and contribute to wellbeing of nature.
              </p>
            </div>
            <div className="about-overview__image-box">
              <img
                src={AboutImg}
                alt="Relax with Us"
                className="about-overview__image-box--image"
              />
            </div>
          </section>

          <section className="beauticare-presentation">
            <h2>Accompanied by nature itself</h2>
            <div className="cosmetics-cards">
              {cosmeticsCards.map((card) => (
                <Card {...card} key={card.title} />
              ))}
            </div>
          </section>
          <section className="testimonials">
            <h2>Our customers say</h2>
            <div className="testimonials-carousel">
              <Carousel />
            </div>
          </section>
          <section className="contacts-overview">
            <h2>Find us</h2>
            <div className="contacts-overview__form">
              <div className="contacts-overview__form--map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.7868583859354!2d25.284743716108764!3d54.678179781818564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94156feffea9%3A0x339c214c808e9e41!2zVsWhxK4gVmlsbmlhdXMgcm90dcWhxJc!5e0!3m2!1sen!2slt!4v1606886700514!5m2!1sen!2slt"
                  frameBorder="0"
                  title="find-us"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="contacts-overview__form--data">
                <h3>Our address</h3>
                <p>Didzioji str. 31, Vilnius 01128, Lithuania</p>
                <h3>Call us</h3>
                <p>
                  <a href="tel:+370-611-12345">+370-611-12345</a>
                </p>
                <h3>Drop us a line</h3>
                <p>
                  <a href="mailto:info@sinkevich.eu">info@sinkevich.eu</a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        Created by Jevgenija Sinkevic &copy;2020 All rights reserved
      </footer>
    </div>
  );
}

export default App;
