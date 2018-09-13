import React, {Component} from 'react'
import './knowledgeFoodItem.styl'
class knowledgeFoodItem extends Component {


  render() {

    const recommend= this.props.recommend;

    return (
      <div className="foodListWrap" >
        <div className="foodListLeft">
          <div className="avatar" >
            <img src={recommend?recommend.avatar:null}/>
            <span>{recommend?recommend.nickname:null}</span>
          </div>
          <span className="title">{recommend?recommend.title:null}</span>
          <span className="subTitle">{recommend?recommend.subTitle:null}</span>
        </div>
        <div className="foodListRight">
          <img src={recommend?recommend.picUrl:null}/>
          <div>{recommend?recommend.typeName:null}</div>
        </div>
      </div>
    )
  }
}
export default knowledgeFoodItem