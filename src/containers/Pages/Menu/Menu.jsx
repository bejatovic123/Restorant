/*eslint-disable react/prop-types*/

import React, { useState } from 'react';
import aboutBanner from '../../../assets/about-banner.jpeg';
import log from './logo.png';
import { toast, ToastContainer } from 'react-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => {
  const [order, setOrder] = useState([]);

  function orderMenu(menu) {
    setOrder([...order, menu]);
  }

  function cancelMenu(menu) {
    setOrder(
      order.filter((m) => m.header !== menu.header && m.price !== menu.price)
    );
  }

  const navigate = useNavigate();
  function handleClick(e) {
    console.log(order);
    e.preventDefault();
    toast(
      `Thank you for your order,we will serve it soon`,
      setTimeout(() => {
        navigate('/');
      }, 3000)
    );
  }

  const MenuCard = ({ header, text, price }) => {
    const handleChange = (e) => {
      if (e.target.checked) {
        orderMenu({ header, price });
      } else {
        cancelMenu({ header, price });
      }
    };

    useEffect(() => {
      console.log('asddf');
    }, []);

    return (
      <>
        {header && <h2>{header}</h2>}
        {text && (
          <p>
            {text.map((txt, i) => (
              <span key={i}>{txt}</span>
            ))}
          </p>
        )}

        {price && <p>{price}</p>}
        {<input type='radio' onChange={handleChange} />}
      </>
    );
  };

  const SideCard = ({ header, price }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    var data = [];

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }

    return (
      <div className='menu__sides'>
        {header && <h3>{header}</h3>}
        {price && <p>{price}</p>}
        {<input type='checkbox' id={i} onChange={handleChange} />}
      </div>
    );
  };

  return (
    <>
      <img className='menu__pick' src={aboutBanner} alt='about-banner' />
      <div className='menu__Card'>
        <div className='menu__main'>
          <div className='log'>
            <img alt='loading' src={log} />
          </div>
          <h1 className='menu__header'>Main Dishes</h1>
          {menuContent.map((data, i) => (
            <MenuCard key={i} {...data} />
          ))}
        </div>
        <div className='menu__side'>
          <h2 className='menu__header'>Sides</h2>

          {sideMenu.map((data, i) => (
            <SideCard key={i} {...data} />
          ))}
        </div>
      </div>
      <div className='button__bt' onClick={handleClick}>
        {order.length > 0 && <button>Order</button>}
      </div>
      <ToastContainer position='bottom-right' delay={5000} />
    </>
  );
};

export default Menu;

const sideMenu = [
  {
    header: 'Fries',
    price: '5$',
  },
  {
    header: 'Onion Rings',
    price: '3$',
  },

  {
    header: 'Has Brown',
    price: '4$',
  },

  {
    header: 'Chicken Nuggets',
    price: '4$',
  },

  {
    header: 'Coleslaw',
    price: '6$',
  },

  {
    header: 'Salad',
    price: '5$',
  },

  {
    header: 'Soft Drink',
    price: '4$',
  },

  {
    header: 'Orange Juice',
    price: '5$',
  },

  {
    header: 'Iced Tea',
    price: '4$',
  },

  {
    header: 'Coffe',
    price: '6$',
  },

  {
    header: 'Smoothie',
    price: '4$',
  },

  {
    header: 'Water',
    price: '2$',
  },
];

const menuContent = [
  {
    header: 'The Caesar',

    text: [
      'Crisp romaine lettuce tossed with our homemade Caesar dressing, croutons, and shredded parmesan cheese.',
    ],
    price: '19$',
  },
  {
    header: 'Surf I Turf',

    text: [
      ' A grilled, queen-cut ribeye served with shrimp and scallop alfredo.',
    ],

    price: '17$',
  },

  {
    header: 'Creamy Sage',

    text: [
      'Chicken breast sautéed with fresh sage and prosciutto. Served atop creamy asiago linguini.',
    ],

    price: '21$',
  },

  {
    header: 'From the Sea',

    text: [
      'Fresh haddock, gulf shrimp, and sea scallops dipped in beer batter and fried to a golden brown.',
    ],

    price: '23$',
  },

  {
    header: 'BBs Tenderloin',

    text: [
      'Tenderloin tips, sautéed with bacon and mushrooms and finished with a bourbon-BBQ sauce.',
    ],

    price: '18',
  },

  {
    header: 'Chicken Marsala',

    text: [
      'Boneless chicken breast sautéed with mushrooms and finished in a marsala and cream reduction.',
    ],

    price: '22$',
  },
];
