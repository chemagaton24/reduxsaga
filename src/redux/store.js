import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/products";

import productSaga from "./sagas/product";
import createSagaMiddleware from "@redux-saga/core";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
