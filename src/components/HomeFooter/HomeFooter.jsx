import React , {Component} from 'react'
import './homefooter.styl'

class HomeFooter extends Component{
  render(){
    return(
      <div className="homeFooter">
        <div className="homeFooterH">
          <a href="javascript:;">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <div className="homeFooterT">
          <span className="copyright">网易公司版权所有 © 1997-</span>
          <span className="licence">食品经营许可证：JY13301080111719</span>
        </div>

      </div>
    )
  }
}
export default HomeFooter