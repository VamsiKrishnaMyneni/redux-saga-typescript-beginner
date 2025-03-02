import { all, fork, call, put, takeLatest } from 'redux-saga/effects'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any): Generator<any, void, any> {
    const url = `https://jsonplaceholder.typicode.com/users/${action.payload.userId}`
    try {
        const response = yield call(fetch, url)
        const user = yield response.json()
        yield put({ type: 'USER_FETCH_SUCCEEDED', data: user })
    } catch (e: any) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}



function* watchUserSaga() {
    yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
}



export default function* usersSaga() {
    yield all([fork(watchUserSaga)]);
}