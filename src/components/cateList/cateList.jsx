import React, {Component} from 'react'
import './cateList.styl'
class cateList extends Component {

  render() {
    const find = this.props.find;
    return (
      <div className="cateContainer">
        <img src={find?find.itemPicUrl:null}/>
        <span>{find?find.title:null}</span>
      </div>
    )
  }
}
export default cateList