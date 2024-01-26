import {all} from 'redux-saga/effects';
import {newsServiceSaga} from './news-service';

export default function* rootSaga() {
  yield all([...newsServiceSaga]);
}
