import { takeEvery, call, put } from "redux-saga/effects";
import { putProducts } from "../reducers/products";

function* workerGetProductsSaga() {
  const productFetch = yield call(() =>
    fetch("https://dummyjson.com/products")
  );
  const products = yield productFetch.json();
  yield put(putProducts(products));
}

function* productSaga() {
  yield takeEvery("products/getProducts", workerGetProductsSaga);
}

export default productSaga;
