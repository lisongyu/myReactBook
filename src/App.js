import React,{ Component } from 'react';
import { GlobalStyle } from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
// 引入路由依赖，并起一个别名，因为原先名字太长了
import { BrowserRouter ,Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import {Provider} from 'react-redux'
import store from './store';
class App extends Component {
  render () {
    return (
      <Provider store={store}>
       
        <BrowserRouter>
        <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/write' component={Write}></Route>
            <Route exact path='/detail/:id' component={Detail}></Route>
        </BrowserRouter>
        <GlobalStyle />
        <GlobalIcon />
      </Provider>
    )


  }
}

export default App;


