import {createStore, applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas';
// create the saga middleware
import reducer from './reducer'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // 有指定扩展选项，像name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
  // 其他store增强器（如果有的话）
);


const store=createStore(
  reducer,
  enhancer
);
// then run the saga
sagaMiddleware.run(todoSagas)
export default store