import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // 有指定扩展选项，像name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // 其他store增强器（如果有的话）
);

const store=createStore(
  reducer,
  enhancer
);
export default store