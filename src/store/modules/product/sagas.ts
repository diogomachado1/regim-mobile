import { takeLatest, call, put, all, debounce } from 'redux-saga/effects';
//  import { toast } from 'react-toastify';

import { Alert } from 'react-native';
import api from '../../../services/api';
//  import history from '~/services/history';

import {
  saveProductInSuccess,
  saveProductInFailure,
  getProductRequest,
  getProductInSuccess,
  getProductInFailure,
  deleteProductInSuccess,
  deleteProductInFailure,
  getOneProductInSuccess,
  getOneProductInFailure,
  duplicateProductInSuccess,
  duplicateProductInFailure,
  getPublicProductInSuccess,
  getPublicProductInFailure,
  getNextProductInSuccess,
  getNextProductInFailure,
} from './actions';

export function* saveProduct({ payload }) {
  try {
    const { product } = payload;

    if (!product.id) {
      yield call(api.post, '/products/', product);
    } else {
      yield call(api.put, `/products/${product.id}`, product);
    }

    yield put(saveProductInSuccess());
    yield put(getProductRequest());
  } catch (err) {
    Alert.alert('Falha ao salvar produto', err.response.data.message);
    // toast.error('Falha ao salvar produto, verifique seus dados!');
    yield put(saveProductInFailure());
  }
}

export function* getProducts({ payload }) {
  try {
    const { page = 1, search = '' } = payload;
    const response = yield call(api.get, `/products`, {
      params: {
        page,
        search,
      },
    });

    yield put(getProductInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao obter produtos', err.response.data.message);

    yield put(getProductInFailure());
  }
}

export function* getNextProducts({ payload }) {
  try {
    const { page = 1, search = '' } = payload;
    const response = yield call(api.get, `/products`, {
      params: {
        page,
        search,
      },
    });

    yield put(getNextProductInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao obter produtos', err.response.data.message);

    yield put(getNextProductInFailure());
  }
}

export function* getPublicProducts({ payload }) {
  try {
    const { page = 1, search = '' } = payload;
    const response = yield call(api.get, `/public_products`, {
      params: {
        page,
        search,
      },
    });

    yield put(getPublicProductInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao obter produtos', err.response.data.message);

    yield put(getPublicProductInFailure());
  }
}

export function* getProduct({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/products/${id}`);

    yield put(getOneProductInSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao obter produto', err.response.data.message);

    yield put(getOneProductInFailure());
  }
}

export function* duplicateProduct({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.post, `/duplicate_product/${id}`);

    yield put(duplicateProductInSuccess(response.data));
    // toast.success('Produto duplicado');
    yield put(getProductRequest());
  } catch (err) {
    Alert.alert('Falha ao duplicar o produto', err.response.data.message);

    yield put(duplicateProductInFailure());
  }
}

export function* deleteProduct({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/products/${id}`);

    yield put(deleteProductInSuccess());
    yield put(getProductRequest());
    // toast.success('Produto excluído');
  } catch (err) {
    Alert.alert('Falha ao excluir o produto', err.response.data.message);

    yield put(deleteProductInFailure());
  }
}

export default all([
  takeLatest('@product/SAVE_IN_RESQUEST', saveProduct),
  debounce(600, '@product/GET_IN_RESQUEST_DEBOUNCE', getProducts),
  takeLatest('@product/GET_IN_RESQUEST', getProducts),
  takeLatest('@product/GET_NEXT_RESQUEST', getNextProducts),
  takeLatest('@product/GET_PUBLIC_IN_RESQUEST', getPublicProducts),
  takeLatest('@product/GETONE_IN_RESQUEST', getProduct),
  takeLatest('@product/DUPLICATE_IN_RESQUEST', duplicateProduct),
  takeLatest('@product/DELETE_IN_RESQUEST', deleteProduct),
]);
