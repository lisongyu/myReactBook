import React,{ Component } from 'react';
import { GlobalStyle } from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
// 引入路由依赖，并起一个别名，因为原先名字太长了
import { BrowserRouter ,Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import {Provider} from 'react-redux'
import store from './store';
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/detail' component={Detail}></Route>
        </BrowserRouter>
        <GlobalStyle />
        <GlobalIcon />
      </Provider>
    )


  }
}

export default App;


