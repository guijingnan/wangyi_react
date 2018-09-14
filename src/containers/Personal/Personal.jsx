import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Login from '../Login/Login'
import './personal.styl'
class Personal extends Component {
  state={
    isLogin:false,
    loginType:'phone'
  }
  componentDidMount(){
    console.log(this.props.location.pathname)
    if(this.props.location.pathname==='/personal/login:2' || this.props.location.pathname==='/personal/login:1'){
      console.log("1")
      this.setState({
        isLogin:true,
      },()=>{
        this.showLogin()
      })
    }
    this.setState({
      isLogin:false,
      loginType:'phone'
    })
  }
  changeRoute=(path)=>{
    this.props.history.replace(path)
  }
  showLogin=(type)=>{
    this.setState({
      isLogin:true,
      loginType:type
    })
  }
  changeLogin=(type)=>{
    this.setState({
      isLogin:true,
      loginType:type
    },(type)=>{
      this.showLogin(type)
    })

  }

  render() {
    const {isLogin} = this.state;
    console.log(isLogin)
    return (
      <section id="personalContainer">
        <div className="headerWraper bottom-border-1px">
          <div className="header-search">
            <i className="iconfont icon-home" onClick={()=>this.changeRoute('/home')}></i>
          <a href="javascript:;"></a>
          <div>
            <i className="iconfont icon-search"></i>
            <i className="iconfont icon-tubiaozhizuomoban1" onClick={()=>this.changeRoute('/shoppingcart')}></i>
        </div>

      </div>
  </div>
<Switch>
  <Route path='/personal/login:id' component={Login} />
</Switch>
    <div className={`bodywraper ${isLogin===true?'dis':null}` } >
      <div className="img-Header">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
      </div>
      <div className="phoneLogin">
        <i className="iconfont icon-phone" ></i>
        <span onClick={()=>this.changeLogin('phone')}>
        <NavLink to="/personal/login:1">
          手机号码登陆
        </NavLink>
      </span>

    </div>
    <div className="mailLogin">
      <i className="iconfont icon-email"></i>
      <span onClick={()=>this.changeLogin('email')}>
      <NavLink to="/personal/login:2">
        邮箱账号登陆
      </NavLink>
    </span>
  </div>
    <div className="phoneRegist">
      <span>手机号快速注册</span>
      <i className="iconfont icon-goto" ></i>
    </div>
    <ul className="footer">
      <li className="weixin">
        <i className="iconfont icon-weixin"></i>
        <span>微信</span>
      </li>
      <li className="qq">
        <i className="iconfont icon-web-icon-"></i>
        <span>QQ</span>
      </li>
      <li className="weibo">
        <i className="iconfont icon-weibo"></i>
        <span>微博</span>
      </li>
    </ul>
  </div>
  </section>
    )
  }
}
export default Personal