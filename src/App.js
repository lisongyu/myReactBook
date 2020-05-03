import React,{ Component } from 'react';
import { GlobalStyle } from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render () {
    return (
      <div className='App'>
       <Header />
      <GlobalStyle />
      <GlobalIcon />
       </div>
    )


  }
}

export default App;


