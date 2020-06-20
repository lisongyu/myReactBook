import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
 topicList:[],
articleList:[],
recommendList:[],
articlePage:1,
showScroll:false
});

export default (state = defaultState, action) => {
    switch(action.type) {
      case constants.CHANGE_HOME_DATA:
        return state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList)
        })
      case constants.ADD_HOME_LIST:
        return state.merge({
          articlePage: action.nextPage,
          articleList: state.get('articleList').concat(action.list)
        })
      case constants.TOGGLE_SCROLL_TOP:
        console.log(action.show)
        return state.set('showScroll', action.show)
      default:
        return state;
    }
}