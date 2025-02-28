import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga.index";
import rootReducer from "./reducers.index";



const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

sagaMiddleware.run(rootSaga)

export default store;