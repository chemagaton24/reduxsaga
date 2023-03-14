import React from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

export default App;
