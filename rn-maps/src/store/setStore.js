import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

import { AsyncStorage } from "react-native"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userInfo", "signIn"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
let persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default () => {
  return { store, persistor }
}
