import React, {Component} from 'react'
import './knowledgeList.styl'
class KnowledgeList extends Component {


  render() {

    const recommendOne= this.props.recommendOne
console.log(recommendOne)
    return (
      <div className="know-wrap" >
        <div className="img-title">
          <img src={recommendOne?recommendOne.picUrl:null} />
        </div>
        <div className="title-price">
      <span>
      {recommendOne?recommendOne.title:null}
    </span>
          <span className="price">
       {recommendOne?recommendOne.priceInfo:null}元起
      </span>
        </div>
        <div className="subTitle">{recommendOne?recommendOne.subTitle:null}</div>
      </div>
    )


  }
}
export default KnowledgeList