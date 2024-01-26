import {NEWS} from '../../constants/news';
import {takeEvery, call, put} from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import {ApiUrls} from '../../../networks/ApiUrls';

function* callTopHeadingApi() {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.TOP_HEADLINES,
      {},
    );
    const result = response.data.articles;
    console.log('RJ--result', result)
    yield put({type: NEWS.TOP_HEADING_SUCCESS, payload: [...result]});
  } catch (error) {
    yield put({type: NEWS.TOP_HEADING_FAILURE});
  }
}

export const newsServiceSaga = [
  takeEvery(NEWS.TOP_HEADING_FETCH, callTopHeadingApi),
];
