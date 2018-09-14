import React, {Component} from 'react'
import './classify.styl'
import {connect} from 'react-redux'
import {getCategoryL1List} from '../../redux/actions'
import BScroll from 'better-scroll'
class Classify extends Component {
  state={
    activeIndex:0,
    currentObj:{}
  }
  componentDidMount(){
    this.props.getCategoryL1List()
  }
  componentDidUpdate(){
    this._initScroll()
  }
  _initScroll=()=>{
    this.classifyLeft =new BScroll('.classify-left',{
      click:true,
    })
    this.classifyRight =new BScroll('.classify-right',{
      click:true,
    })
  }
  slideTo=(index)=>{
    this.setState({
      activeIndex:index,
    },()=>{
      const {activeIndex} = this.state;
      this._getPic(activeIndex);
    })

  }
  _getPic=(activeIndex)=>{
    const {categoryL1List} = this.props.Classify;
    this.setState({
      currentObj:categoryL1List[activeIndex]
    })

  }
  render() {
    const {categoryL1List} = this.props.Classify;
    const {activeIndex,currentObj} = this.state;
    return (
      <section id="classifyContainer">
        <div className="headerWraper bottom-border-1px">
          <div className="header-search">
            <div>
              <i className="iconfont icon-search"></i>
              <input type="text" placeholder="搜索商品,共13249款好货"/>
            </div>
          </div>
        </div>
        <div className="classify-body">
          <div className="classify-left">
            <ul className="classify-left-content">
              {categoryL1List.map((area,index)=>(
                <li className={`classify-area ${activeIndex===index?'on':null}`} key={index} onClick={()=>this.slideTo(index)}>
                  {area.name}
                </li>
              ))}

          </ul>
        </div>
        <div className="classify-right">
          <div>
            <img src={categoryL1List[0]?categoryL1List[0].bannerUrl:null}/>
            <ul className="imgList">
              {categoryL1List[activeIndex]?(
                categoryL1List[activeIndex].subCateList.map((item,index)=>(
                  <li key={index} >
                    <img src={item.wapBannerUrl}/>
                    <span>{item.name}</span>
                  </li>
                ))

              ):null}


          </ul>
        </div>


      </div>
  </div>
  </section>
    )
  }
}
export default connect(
  state=>({Classify:state.Classify}),
  {getCategoryL1List}
)(Classify)