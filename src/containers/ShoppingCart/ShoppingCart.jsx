import React, {Component} from 'react'
import './shoppingCart.styl'
class ShoppingCart extends Component {
  changePath=()=>{
    console.log(this)
    this.props.history.replace('/personal')

  }
  render() {
    return (
      <section id="shoppingContainer">
        <div className="headerWraper bottom-border-1px">
          <div className="header-search">
            <span>购物车</span>
            <a href="javascript:;">
              <span>领卷</span>
            </a>
          </div>
        </div>
        <div className="shopping-body">
          <div>
            <div className="shoppingContentHeader">
              <ul className="shoppingHeaderUl">
                <li className="shoppingHeaderLi">
              <span>
                <i className="iconfont icon-yuandian"></i>
                30天无忧退货
              </span>
                </li>
                <li className="shoppingHeaderLi">

              <span>
                <i className="iconfont icon-yuandian"></i>
                48小时快速退货
              </span>
                </li>
                <li className="shoppingHeaderLi">
              <span>
                <i className="iconfont icon-yuandian"></i>
                满88元免邮费
              </span>
                </li>
              </ul>
            </div>
            <div className="shopping-login">
              <div className="cartShop">
                <i className="iconfont icon-gouwuche"></i>
              </div>
              <div className="ShopText">去添加点什么吧</div>
              <div className="login" onClick={this.changePath}>登录</div>
          </div>
        </div>
      </div>

  </section>
    )
  }
}
export default ShoppingCart