import { all } from 'redux-saga/effects';

import { LikesWatcher } from './components/Homepage/HomepageActions';

export default function* rootSaga() {
  yield all(LikesWatcher);
}
