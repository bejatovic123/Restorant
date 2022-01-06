import * as React from "react";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import AppRouter from "./containers/Router";
import "./styles/main.scss";

const App = () => (
  <Provider store={reduxStore}>
    <AppRouter />
  </Provider>
);

export default App;
