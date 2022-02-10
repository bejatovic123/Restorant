import React, { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import mapImage from '../../assets/map.jpg';
import schedule from '../../assets/schedule.png';
import cardImage from '../../assets/drinks.jpg';
import { HomeCard } from '../../components/HomeCard/HomeCard';
import { WithLoader } from '../WithLoader/WithLoader';
import { ThemeContext, themes } from '../../App';

const Layout = () => {
  const [theme] = useContext(ThemeContext);
  const pageBottomContent = [
    {
      heading: 'Address',
      image: cardImage,
      text: [
        'Lange Strasse 68, Baden-Baden Baden-Württemberg, 76530',
        'Phone: Number',
        'Email: Email',
      ],
    },
    {
      heading: 'Map & Contact',
      image: mapImage,
    },
    {
      heading: 'Our Hours',
      image: schedule,
    },
  ];

  return (
    <>
      <div
        className='layout'
        style={{
          background: theme,
          color: theme === themes.dark ? 'white' : 'unset',
        }}
      >
        <Header />
        <div className='layout_body '>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
          <div
            className='layout__bottom-content-wrapper'
            style={{
              background: theme,
            }}
          >
            {pageBottomContent.map((data, i) => (
              <HomeCard key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WithLoader(Layout);
