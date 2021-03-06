import { takeLatest, call, put, all } from 'redux-saga/effects';
// //  import { toast } from 'react-toastify';

//  import history from '~/services/history';
import { Alert } from 'react-native';
import { openApi, closeApi } from '../../../services/api';

import {
  signInSuccess,
  signFailure,
  forgetPasswordSuccess,
  forgetPasswordFailure,
  confirmEmailSuccess,
  confirmEmailFailure,
  cleanRequest,
  confirmEmailPutSuccess,
  confirmEmailPutFailure,
  forgetPasswordPutSuccess,
  forgetPasswordPutFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(openApi.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    closeApi.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // //  history.push('/');
  } catch (err) {
    Alert.alert('Erro', 'Verifique seus dados');

    // // toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(openApi.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    // //  history.push('/');
  } catch (err) {
    Alert.alert('Falha na Criação', err.response.data.message);

    yield put(signFailure());
  }
}

export function* forgetPassword({ payload }) {
  try {
    const { email } = payload;

    yield call(openApi.post, 'forgetPassword', {
      email,
    });

    yield put(forgetPasswordSuccess());

    // toast.success('Email enviado com sucesso!');
    // //  history.push('/');
  } catch (err) {
    // toast.error('Falha email precisa ser confirmado!');
    yield put(forgetPasswordFailure());
  }
}

export function* forgetPasswordPut({ payload }) {
  try {
    const { password, confirmPassword, hash } = payload;

    yield call(openApi.put, `forgetPassword/${hash}`, {
      password,
      confirmPassword,
    });

    yield put(forgetPasswordPutSuccess());

    // toast.success('Senha alterada!');
    // //  history.push('/');
  } catch (err) {
    // toast.error('Codigo expirado!');
    yield put(forgetPasswordPutFailure());
  }
}

export function* confirmEmail({ payload }) {
  try {
    const { email } = payload;

    yield call(openApi.post, 'confirmEmail', {
      email,
    });

    yield put(confirmEmailSuccess());

    // toast.success('Email enviado com sucesso!');
    // //  history.push('/');
  } catch (err) {
    // toast.error('Falha email invalido!');
    yield put(confirmEmailFailure());
  }
}

export function* confirmEmailPut({ payload }) {
  try {
    const { hash } = payload;

    yield call(openApi.put, `confirmEmail/${hash}`);

    yield put(confirmEmailPutSuccess());

    // toast.success('Email confirmado com sucesso!');
    // //  history.push('/');
  } catch (err) {
    // toast.error('Codigo expirado!');
    yield put(confirmEmailPutFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    closeApi.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* clean() {
  yield put(cleanRequest());
}

export function signOut() {
  // //  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('persist/REHYDRATE', clean),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGET_PASSWORD_REQUEST', forgetPassword),
  takeLatest('@auth/FORGET_PASSWORD_PUT_REQUEST', forgetPasswordPut),
  takeLatest('@auth/CONFIRM_EMAIL_REQUEST', confirmEmail),
  takeLatest('@auth/CONFIRM_EMAIL_PUT_REQUEST', confirmEmailPut),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
