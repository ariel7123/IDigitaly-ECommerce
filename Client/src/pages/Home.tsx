// client/src/pages/Home.tsx
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <>
      {/* Video Section */}
      <section className="video-hero" id="home">
        <video
          className="video-hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/videos/apple-products.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Home;
