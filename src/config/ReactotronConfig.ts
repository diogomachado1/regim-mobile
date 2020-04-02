import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
// import Reactotron from 'reactotron-react-js';
import Reactotron from 'reactotron-react-native';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '10.0.0.131' })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .useReactNative()
    .connect();

  tron.clear();

  // eslint-disable-next-line no-console
  console.tron = tron;
}
