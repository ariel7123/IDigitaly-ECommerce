// client/src/pages/Home.tsx
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <>
      {/* Video Section */}
      <section className="video-hero">
        <video
          className="video-hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/videos/apple-products.mp4" type="video/mp4" />
        </video>
        <div className="video-hero__content">
          <span className="video-hero__tagline">IDigitaly</span>
          <h1 className="video-hero__title">
            המקום שבו טכנולוגיה
            <span className="video-hero__title-highlight">פוגשת סגנון</span>
          </h1>
          <p className="video-hero__subtitle">
            מוצרי Apple <span className="video-hero__divider">•</span> אביזרים מובילים <span className="video-hero__divider">•</span> חוויית קנייה שלא תשכחו
          </p>
          <a href="#about" className="video-hero__cta">
            <span className="video-hero__cta-text">גלו עוד</span>
            <svg className="video-hero__cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="about__title">עלינו</h2>
          <p className="about__text">
            IDigitaly היא חנות מובילה למוצרי טכנולוגיה ואלקטרוניקה.
            אנחנו מציעים את המוצרים האיכותיים ביותר מהמותגים המובילים בעולם,
            עם שירות לקוחות מעולה ומשלוחים מהירים לכל הארץ.
          </p>
          <p className="about__text">
            הצוות שלנו מורכב ממומחים בתחום הטכנולוגיה שישמחו לעזור לכם
            למצוא את המוצר המושלם עבורכם.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
