import { put } from 'redux-saga/effects';

export function* LikesWatcher() {
  yield put({ type: 'ADD_LIKE' });
}
