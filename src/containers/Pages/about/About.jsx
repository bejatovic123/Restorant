import React from 'react';
import aboutBanner from '../../../assets/about-banner.jpeg';
import foodSnap from '../../../assets/food-snap.jpg';

const About = () => {
  return (
    <>
      <img className='about__banner' src={aboutBanner} alt='about-banner' />
      <div className='about__card'>
        <img src={foodSnap} alt='food-snap' />
        <div>
          <h3>Since 2007</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
            elementum diam. Duis luctus erat at quam lobortis ornare. Duis
            placerat augue accumsan eros tincidunt ultrices. Proin finibus
            mauris sed sem accumsan dictum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
            elementum diam. Duis luctus erat at quam lobortis ornare. Duis
            placerat augue accumsan eros tincidunt ultrices. Proin finibus
            mauris sed sem accumsan dictum..
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
            elementum diam. Duis luctus erat at quam lobortis ornare. Duis
            placerat augue accumsan eros tincidunt ultrices. Proin finibus
            mauris sed sem accumsan dictum.
          </p>
          <p>We look forward to welcoming you.</p>
        </div>
      </div>
    </>
  );
};

export default About;
