import React from 'react';
import { HomeCard } from '../../../components/HomeCard/HomeCard';
import { Slider } from '../../../components/Slider/Slider';
import cardImage from '../../../assets/drinks.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const bodyContent = [
    {
      heading: 'Welcome to Restaurant',
      image: cardImage,
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et elementum diam. Duis luctus erat at quam lobortis ornare. Duis placerat augue accumsan eros tincidunt ultrices. Proin finibus mauris sed sem accumsan dictum.',
      ],
      buttonText: 'Read about us',
      onButtonClick: () => navigate('/about'),
    },
    {
      heading: 'Reserve a Table',
      image: cardImage,
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et elementum diam. Duis luctus erat at quam lobortis ornare. Duis placerat augue accumsan eros tincidunt ultrices. Proin finibus mauris sed sem accumsan dictum.',
      ],
      buttonText: 'Call and reserve a table',
      onButtonClick: () => navigate('/contact'),
    },
    {
      heading: 'Our Menu',
      image: cardImage,
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et elementum diam. Duis luctus erat at quam lobortis ornare. Duis placerat augue accumsan eros tincidunt ultrices. Proin finibus mauris sed sem accumsan dictum.',
      ],
      buttonText: 'View our menu',
      onButtonClick: () => navigate('/contact'),
    },
  ];

  return (
    <>
      <Slider />
      <div className='home__cards-wrapper'>
        {bodyContent.map((data, i) => (
          <HomeCard key={i} {...data} />
        ))}
      </div>
    </>
  );
};

export default Home;
