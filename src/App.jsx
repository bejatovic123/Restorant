import React, { StrictMode, useState } from "react";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import AppRouter from "./containers/Router";
import "./styles/main.scss";
import { ErrorBoundary } from "./containers/ErrorBoundary/ErrorBoundary";
import { createContext } from "react";

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
        <Provider store={reduxStore}>
          <ThemeContext.Provider value={[theme, toggleTheme]}>
            <AppRouter />
          </ThemeContext.Provider>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
