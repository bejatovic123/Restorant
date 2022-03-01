import React, { StrictMode, useState } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import AppRouter from './containers/Router';
import './styles/main.scss';
import { createContext } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { CartProvider } from './store/CartProvider';

export const themes = {
  light: '#dad8ca',
  dark: 'black',
};

export const ThemeContext = createContext();
export const CartToggle = createContext();

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={[theme, toggleTheme]}>
            <CartProvider>
              <CartToggle.Provider
                value={[cartIsShown, showCartHandler, hideCartHandler]}
              >
                <AppRouter />
              </CartToggle.Provider>
            </CartProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

export default App;
