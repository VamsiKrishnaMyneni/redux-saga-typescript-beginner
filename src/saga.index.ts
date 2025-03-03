import { all, fork } from 'redux-saga/effects';
import usersSaga from './Users/sagas/users.saga';


const rootSaga = function* rootSaga() {
    yield all([fork(usersSaga)]);
}


export default rootSaga;