import React, { PureComponent } from 'react'
import { DetailWrapper, Header,Content } from './style';
import { connect } from 'react-redux';
import  {actionCreators}  from './store';
class Detail extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
     this.props.getDetail(this.props.match.params.id)
  }
}

const mapActions= (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetailInfo(id))
  }
})
const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail', 'content'])
})
export default connect(mapState,mapActions)(Detail);