import React, {Component} from 'react'
import './login.styl'

class Login extends Component {
  state={
    pathname:'/personal/login:1',
    phone:'',
    code:'',
    email:'',
    password:''
  }
componentDidMount(){
  const pathname= this.props.location.pathname;
  const phone = this.refs.phone.value
  const code = this.refs.code.value
  const email = this.refs.email.value
  const password = this.refs.password.value
  this.setState({
    pathname:pathname,
    phone:phone,
    code:code,
    email:email,
    password:password
  })
}
  
  handChange=()=>{
    let phone = this.refs.phone.value;
    let code = this.refs.code.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.setState({
      phone:phone,
      code:code,
      email:email,
      password:password
    })

  }

  login=()=>{
    const pathname= this.props.location.pathname;
    const {phone,code,email,password} = this.state;

    if(pathname==='/personal/login:2'){

      if(!/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}$/.test(email)){

        this.setState({
          email:'请输入邮箱'
        })
        return
      }else if(!/^[a-zA-z0-9_]{10}$/.test(password)){

        this.setState({
          password:'请输入密码'
        })
        return
      }
    }else{
      if(! /^1\d{10}$/.test(phone)){
        this.setState({
          phone:'请输入正确的手机号'
        })
        return
      }else if(!/^\d{6}$/.test(code)){
        this.setState({
          code:'请输入验证码'
        })
        return
      }
    }
  }
  empty=(name)=>{
  this.setState({
    [name]:''
  })
  }
  render() {
  const {pathname,phone,code,email,password} = this.state
    return (
      <div id="login">
        <div className="login-body">
          <div className="img-Header">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
          </div>
          <div className={`phoneLoginType ${pathname==='/personal/login:1'?'on':null}`} >
            <input type="text" placeholder="请输入手机号" className="inputPhone" value={phone} ref='phone' onChange={()=>this.handChange()} onClick={()=>this.empty('phone')}/>
              <div className="verify">
                <input type="text" placeholder="请输入短信验证码" ref='code' value={code} onChange={()=>this.handChange()} onClick={()=>this.empty('code')}/>
                  <span >获取验证码</span>
              </div>
              <div className="err-login">
                <span>遇到问题</span>
                <a>使用密码验证登陆</a>
              </div>
              <button  className="phoneLogin" onClick={this.login}>
              登陆
            </button>
            <button className="otherLogin">其他方式登陆</button>
            <div className="register">
              注册账号
              <i className="iconfont icon-go"></i>
            </div>
          </div>
          <div className={`emailLoginType ${pathname==='/personal/login:2'?'on':null}`} >
            <input type="text" placeholder="邮箱账号" className="inputPhone" ref='email' value={email} onChange={()=>this.handChange()} onClick={()=>this.empty('email')}/>
              <div className="verify">
                <input type="text" placeholder="密码" ref='password' value={password} onChange={()=>this.handChange()} onClick={()=>this.empty('password')}/>
              </div>
              <div className="err-login">
                <span>注册账号</span>
                <a>密码</a>
              </div>
              <button className="phoneLogin" onClick={this.login}>
              登陆
            </button>
            <button className="otherLogin">其他方式登陆</button>

          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
export default Login
//onClick={箭头函数}，用箭头函数是防止无限次循环