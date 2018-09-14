import React,{Component} from 'react'
import './knowledge.styl'
import Split from '../../components/split/split'
import KnowledgeList from '../../components/KnowledgeList/KnowledgeList'
import KnowledgeListHeader from '../../components/knowledgeListHeader/knowledgeListHeader'
import KnowledgeFoodItem from '../../components/knowledgeFoodItem/knowledgeFoodItem'
import CateList from '../../components/cateList/cateList'
import {connect} from 'react-redux'
import {getBanner,
  getColumn,
  getRecommendOne,
  getRecommendTwo,
  getRecommendThree,
  getTenfifteen,
  getZhenThree,
  getYxlook,
  getFindmore
} from '../../redux/actions'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import 'swiper/dist/css/swiper.min.css'

class Knowledge extends Component{
  state={
    titleArr:['为你推荐','十点一刻','严选甄品','严选LOOK'],
  }
  componentDidMount(){
    if(!this.con){
      this.con =new Swiper('.swiper-container',{
        loop: true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }
    this.props.getBanner()
    this.props.getColumn();
    this.props.getRecommendOne()
    this.props.getRecommendTwo()
    this.props.getRecommendThree()
    this.props.getTenfifteen()
    this.props.getZhenThree()
    this.props.getYxlook()
    this.props.getFindmore()
  }
  componentDidUpdate(){
    this._initScroll()
  }
  _initScroll=()=>{
    this.bodywraper = new BScroll('.bodywraper',{
      click:true
    })
    this.foodListsWrap =new BScroll('.food-lists-wrap',{
      click:true,
      scrollX:true
    })
    this.dayWrap =new BScroll('.day-topic',{
      click:true,
      scrollX:true
    });
  }
  render(){
    const {banner,column} = this.props.info;
    const {recommendOne,recommendTwo,recommendThree,Tenfifteen,zhenThree,yanXuan,findMore} = this.props.Knowledge;
    const {titleArr} = this.state;


    return(
      <section id="KnowledgeContainer">
        <div className="headerWraper bottom-border-1px">
          <div className="header-search">
            <i className="iconfont icon-home" ></i>
          <a href="javascript:;"></a>
          <div>
            <i className="iconfont icon-search"></i>
            <i className="iconfont icon-tubiaozhizuomoban1"></i>
        </div>

      </div>
  </div>
    <div className="bodywraper">
      <div>
        <nav className="msite_nav border-1px">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {banner.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                <a href="javascript:;" className="link_to_food">
                <div className="food_container">
                <img src={item.picUrl}/>
                </div>
                <div className="food_container_text">
                <div className="content_text">
                <span className="subTitle">{item.subTitle}</span>
                <span className="desc">{item.desc}</span>
                <span className="title">{item.title}</span>
                </div>
                </div>
                </a>
                </div>
                ))}

          </div>

          <div className="swiper-pagination"></div>
      </div>
    </nav>
    <div  className="food-lists-wrap">
      <ul  className="food-lists">
        {column.map((col,index)=>(
          <li key={index}>
            <div className="artical_wrap">
              <img src={col.picUrl}/>
              <div className="artical">{col.articleCount}</div>
            </div>
            <span>{col.title}</span>
          </li>
        ))}

    </ul>
  </div>
    <Split/>
    <KnowledgeListHeader title={titleArr[0]} />
    <KnowledgeList recommendOne={recommendOne} />
    <KnowledgeFoodItem recommend={recommendThree}/>
    <KnowledgeFoodItem recommend={recommendTwo}/>
    <KnowledgeListHeader  title={titleArr[1]}/>
    <div  className="day-topic">
      <ul  className="day-topic-ul">
        {Tenfifteen.map((item,index)=>(
          <li className="day-topic-li" key={index}>
            <span className="topic">-今日话题-</span>
            <span className="title">{item.title}</span>
            <span className="desc">{item.desc}</span>
            <div className="avatar-person" >
              {
                item.participantAvatar?(item.participantAvatar.map((avatar,index)=>(
                  avatar?(<img  src={avatar}  key={index}/>):null

                ))):null
                }

              <span className="person-img" >...</span>
              <span>{item.participantNum}人参与话题</span>
            </div>
          </li>
        ))}

      </ul>
    </div>
    <KnowledgeListHeader  title={titleArr[2]}/>
    <KnowledgeList recommendOne={recommendOne}/>
    <KnowledgeFoodItem recommend={zhenThree}/>
    <KnowledgeFoodItem recommend={recommendThree}/>
    <KnowledgeListHeader  title={titleArr[3]}/>
    <div className="strict-look">
      <img src="https://yanxuan.nosdn.127.net/43202fd787c7fb9ed4ce09822cd519fc.jpg"/>
        <div className="img-avatar">
          <img src={yanXuan?yanXuan.avatar:null} />
          <span >{yanXuan.nickname}</span>
        </div>
        <div className="yanxuanText" >{findMore[0]?findMore[0].content:null}</div>
    </div>
    <div className="throwLine">
      <span className="line"></span>
      <span className="throwLine-text">更多精彩</span>
    </div>
        {
          findMore.map((find,index)=>(
            <CateList key={index} find={find}/>
          ))
        }

  </div>
  </div>
  </section>
    )
  }
}
export default connect(
  state=>({info:state.info,Knowledge:state.Knowledge}),
  {getBanner,
    getColumn,
    getRecommendOne,
    getRecommendTwo,
    getRecommendThree,
    getTenfifteen,
    getZhenThree,
    getYxlook,
    getFindmore
  }
)(Knowledge)