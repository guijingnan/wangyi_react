import React, {Component} from 'react'
import '../../assets/stylus/mixins.styl'
import './footerguider.styl'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
class FooterGuider extends Component {
  addStyle=()=>{
    console.log(this)
  }

  render() {
    return (
      <footer className="footer_guide border-1px">
        <NavLink  className={`guide_item ${this.props.location.pathname==='/home'?'on':null}`} to='/home' >
          <span className="item_icon">
          <i className="iconfont icon-home"></i>
        </span>
        <span>首页</span>
      </NavLink>
        <NavLink  className={`guide_item ${this.props.location.pathname==='/knowledge'?'on':null}`} to='/knowledge'>
        <span className ="item_icon">
            <i className ="iconfont icon-wuzi"></i>
          </span>
        <span>识物</span>
      </NavLink>
        <NavLink  className={`guide_item ${this.props.location.pathname==='/classify'?'on':null}`} to='/classify'>
        <span className ="item_icon">
            <i className ="iconfont icon-fenlei"></i>
          </span>
        <span>分类</span>
      </NavLink>
        <NavLink  className={`guide_item ${this.props.location.pathname==='/shoppingcart'?'on':null}`} to='/shoppingcart'>
        <span className ="item_icon">
            <i className ="iconfont icon-tubiaozhizuomoban1"></i>
          </span>
        <span>购物车</span>
      </NavLink>
        <NavLink  className={`guide_item ${this.props.location.pathname==='/personal'?'on':null}`} to='/personal'>
        <span className ="item_icon">
            <i className ="iconfont icon-tubiaozhizuomoban"></i>
          </span>
        <span>个人</span>
      </NavLink>
      </footer>
    )
  }
}
export default withRouter(FooterGuider)