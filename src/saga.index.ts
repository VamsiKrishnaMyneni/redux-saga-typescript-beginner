import { all, fork } from 'redux-saga/effects';
// import { herosRequest } from './sagas/heros.saga';
import usersSaga from './sagas/user.saga';


const rootSaga = function* rootSaga() {
    yield all([fork(usersSaga)]);
}


export default rootSaga;