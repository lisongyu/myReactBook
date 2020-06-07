import React,{ Component } from 'react';
import { GlobalStyle } from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store';
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <GlobalStyle />
        <GlobalIcon />
      </Provider>
    )


  }
}

export default App;


