import React,{Component} from  'react'
import HomeFooter from '../../components/HomeFooter/HomeFooter.jsx'
import './home.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
import {getHome,getTagList,getNewItemList,getTopicList,getCateList} from '../../redux/actions'
import {connect} from 'react-redux'

class Home extends Component{
  state={
    currentIndex:0,
    array:[1,2]
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
    this.props.getHome()
    this.props.getTagList()
    this.props.getNewItemList()
    this.props.getTopicList()
    this.props.getCateList()
  }
  componentDidUpdate(){
      this._initScroll()
    this.headerTab.refresh()
  }
  componentWillUnmount(){
    if(this.bodywraper || this.foodListsWrap || this.headerTab || this.topic){
      this.bodywraper.destroy()
      this.foodListsWrap.destroy()
      this.headerTab.destroy()
      this.topic.destroy()
    }

  }
  handlerTo=(index)=>{
    console.log(index)
    this.setState({
      currentIndex:index
    })
  }
  _initScroll=()=>{

    //加了判断BScroll是否存在的条件,就不能滑动
    this.bodywraper= new BScroll('.bodywraper',{
      click:true
    })
    //因为在遍历两次父容器后，只会给子元素添加一次样式，因为类名一样，better-scroll只识别一次
    for(let i=0;i<2;i++)   {
      this.foodListsWrap = new BScroll('.food-lists-wrap'+i,{
        click:true,
        scrollX:true,
        scrollY:false
      });
    }
    this.headerTab =  new BScroll('.header-tab',{
      click:true,
      scrollX:true,
      scrollY:false
    });
   this.topic = new BScroll('.main-topic-body',{
      click:true,
      scrollX:true,
      scrollY:false
    })
  }


  render(){
    const {headCateList,tagList,newItemList,TopicList,cateList} = this.props.info;

    const {currentIndex,array} = this.state

    return(
      <section id="homeContainer">
        <div className="headerWraper">
          <div className="header-search">
            <a href="javascript:;"></a>
            <div>
              <i className="iconfont icon-search"></i>
              <input type="text" placeholder="搜索商品"/>
            </div>
          </div>
          <div className="header-tab">
            <ul  className="searchItem">
              {
                headCateList.map((item,index)=>(
                  <li key={index} className={`lis-Li ${currentIndex===index?'on':null}`} onClick={()=>this.handlerTo(index)}>{item.name}</li>
                ))

                }
          </ul>
        </div>
      </div>
    <div className="bodywraper">
      <div className="body-content">
        <nav className="msite_nav border-1px">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                  headCateList.map((item,index)=>(
                    <div className="swiper-slide" key={index}>
                      <a href="javascript:" className="link_to_food">
                        <div className="food_container">
                          <img src={item.bannerUrl}/>
                        </div>
                      </a>
                    </div>
                  ))

                }
          </div>
          <div className="swiper-pagination"></div>
      </div>
    </nav>
    <ul className="g-grow">
      <li>
        <i className="iconfont icon-gou"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i className="iconfont icon-gou"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i className="iconfont icon-gou"></i>
        <span>网易自营品牌</span>
      </li>
    </ul>
    <div className="shopList">
      <div className="shop-List-header">
        <span>品牌制造商直供</span>
        <i className="iconfont icon-go"></i>
      </div>
      <div className="shop-List-foods">
        <ul className="foods">
          {tagList.map((tag, index)=>(
            <li key={index}>
              <div className="list-text">
                <span>{tag.name}</span>
                <span>{tag.floorPrice}</span>
                <span>上新</span>
              </div>
              <div className="img-list">
                <img src={tag.picUrl}/>
              </div>
            </li>
          ))}


      </ul>
    </div>
  </div>
        {
          array.map((item,index)=>(
            <div  className={`shopListX shopListX${index}`}  key={index}>
              <div className="shopListX-header">
                <span>新品首发</span>
                <span>查看全部</span>
              </div>
              <div  className={`food-lists-wrap food-lists-wrap${index}`}>
                <ul  className={`food-lists food-lists${index}`}>
                  {
                    newItemList.map((item,index)=>(
                      <li key={index}>
                        <div>
                          <img src={item.primaryPicUrl}/>
                        </div>
                        <span>{item.name}</span>
                        <span>{item.simpleDesc}</span>
                        <span>￥{item.retailPrice}</span>
                      </li>
                    ))


                  }

                </ul>
              </div>
            </div>
          ))
        }

    <div className="limit-buy" >
      <a href="javascript:;">
        <div>
          <div className="limit-buy-text">
            <span className="limit-buys">严选限时购</span>
            <span className="limit-time">
                  <span>03</span>
                  <span className="noneS">:</span>
                  <span>47</span>
                  <span className="noneS">:</span>
                  <span>04</span>
                </span>
            <span className="limit-back">下一场22：00开始</span>
          </div>
          <div className="limit-buy-img">
            <img src="http://yanxuan.nosdn.127.net/191be005f37aecfef781d567042954cd.png"/>
          </div>
        </div>
      </a>
    </div>
    <div className="go-look" >
      <a href="javascript:;" >
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg"/>
      </a>
    </div>
    <div className="main-topic">
      <div className="main-topic-header">
        <span>专题精选</span>
        <i className="iconfont icon-go"></i></div>
      <div className="main-topic-body">
        <ul  className="main-topics">
          {TopicList.map((top,index)=>(
            <li  className="main-topic-imgs" key={index}>
              <div className="topic-imgs-d">
                <img src={top.scenePicUrl}/>
              </div>
              <div className="topic-imgs-t">
                <div>
                  <span>{top.subtitle}</span>
                  <span>{top.title}</span>
                </div>
                <span>{top.priceInfo}元起</span>
              </div>

            </li>
          ))}

        </ul>
      </div>

    </div>
        {cateList.map((list,index)=>(
    <div className="homeThing" key={index}>
        <div className="homeThing-header">
            <span>{list.name}好物</span>
        </div>
        <div className="homeThing-foods">
        <ul className="Thing">
          {list.itemList.map((item,index)=>(
            <li key={index}>
              <div className="img-list">
                <img src={item.listPicUrl}/>
              </div>
              <div className="list-text">
                <span>{item.simpleDesc}</span>
                <span>{item.name}</span>
                <span>￥{item.couponPrice}</span>
              </div>
            </li>
          ))}


        </ul>
        </div>

    </div>
      ))
        }
    <HomeFooter/>
  </div>
  </div>

  </section>

    )
  }
}

export default connect(
  state=>({info:state.info}),
  {getHome,getTagList,getNewItemList,getTopicList,getCateList}
)(Home)

