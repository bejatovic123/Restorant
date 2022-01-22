import React, { StrictMode, useState } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import AppRouter from "./containers/Router";
import "./styles/main.scss";
import { ErrorBoundary } from "./containers/ErrorBoundary/ErrorBoundary";
import { createContext } from "react";
import { PersistGate } from "redux-persist/integration/react";

export const themes = {
  light: "#dad8ca",
  dark: "black",
};

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeContext.Provider value={[theme, toggleTheme]}>
              <AppRouter />
            </ThemeContext.Provider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
