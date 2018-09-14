//用来发送请求获取数据，然后去触发reducers
import {
  getheadCateList,
  getTagListData,
  getNewItemListData,
  getTopicListData,
  getCateListData,
  getBannerData,
  getColumnData,
  getRecommendOneData,
  getRecommendTwoData,
  getRecommendThreeData,
  getTenfifteenData,
  getZhenThreeData,
  getYxLookData,
  getFindMoreData,
  getCategoryL3ListData
} from '../api'
import {
  AUTH_SUCCESS,
  TAGLIST_SUCCESS,
  NEWITEM_LIST_SUCCESS,
  TOPICLIST_SUCCESS,
  CATELIST_SUCCESS,
  BANNER_SUCCESS,
  COLUMN_SUCCESS,
  RECOMMENDONE_SUCCESS,
  RECOMMENDTWO_SUCCESS,
  RECOMMENDTHREE_SUCCESS,
  TENFIFTEEN_SUCCESS,
  ZHENTHREEDATA_SUCCESS,
  YXLOOK_SUCCESS,
  FINDMORE_SUCCESS,
  CATEGORYL1LIST_SUCCCESS
} from './action-types'
const SuccessData = (msg)=>({type:AUTH_SUCCESS,data:msg});
const receive_TagList = (tagList) =>({type:TAGLIST_SUCCESS,data:tagList});
const receive_NewItemList = (NewItemList) =>({type:NEWITEM_LIST_SUCCESS,data:NewItemList});
const receive_TopicList = (TopicList) =>({type:TOPICLIST_SUCCESS,data:TopicList});
const receive_CateList = (CateList) =>({type:CATELIST_SUCCESS,data:CateList});
const receive_Banner = (Banner) =>({type:BANNER_SUCCESS,data:Banner});
const receive_Column = (Column) =>({type:COLUMN_SUCCESS,data:Column});
const receive_CommendOne = (Commendone) =>({type:RECOMMENDONE_SUCCESS,data:Commendone});
const receive_CommendTwo = (CommendTwo) =>({type:RECOMMENDTWO_SUCCESS,data:CommendTwo});
const receive_CommendThree = (CommendThree) =>({type:RECOMMENDTHREE_SUCCESS,data:CommendThree});
const receive_Tenfifteen = (tenfifteen) =>({type:TENFIFTEEN_SUCCESS,data:tenfifteen});
const receive_ZhenThree = (ZhenThree) =>({type:ZHENTHREEDATA_SUCCESS,data:ZhenThree});
const receive_Yxlook = (Yxlook) =>({type:YXLOOK_SUCCESS,data:Yxlook});
const receive_Findmore = (Findmore) =>({type:FINDMORE_SUCCESS,data:Findmore});
const receive_CategoryL1List = (CategoryL1List) =>({type:CATEGORYL1LIST_SUCCCESS,data:CategoryL1List});
export function getHome(){
  return async dispatch=>{
    const result = await getheadCateList();
    const headList = result.data;
    dispatch(SuccessData( headList))

  }
}

export function getTagList(){
  return async dispatch=>{
    const result = await getTagListData();
    const getTagList = result.data;
    const TagList = getTagList.slice(0,4);
    dispatch(receive_TagList( TagList))
  }
}
export function getNewItemList(){
  return async dispatch=>{
    const result = await getNewItemListData();
    const NewItemList = result.data;
    dispatch(receive_NewItemList(NewItemList))
  }
}
export function getTopicList(){
  return async dispatch=>{
    const result = await getTopicListData();
    const TopicList = result.data;
    dispatch(receive_TopicList(TopicList))
  }
}
export function getCateList(){
  return async dispatch=>{
    const result = await getCateListData();
    const CateList = result.data;
    dispatch(receive_CateList(CateList))
  }
}
export function getBanner(){
  return async dispatch=>{
    const result = await getBannerData();
    const Banner = result.data;
    dispatch(receive_Banner(Banner))
  }
}
export function getColumn(){
  return async dispatch=>{
    const result = await getColumnData();
    const Column = result.data;
    dispatch(receive_Column(Column))
  }
}

export function getRecommendOne() {
  return async dispatch=>{
    const result = await getRecommendOneData();
    const Recommend = result.data;
    dispatch(receive_CommendOne(Recommend))
  }
}
export function getRecommendTwo() {
  return async dispatch=>{
    const result = await getRecommendTwoData();
    const Recommend = result.data;
    dispatch(receive_CommendTwo(Recommend))
  }
}
export function getRecommendThree() {
  return async dispatch=>{
    const result = await getRecommendThreeData();
    const Recommend = result.data;
    dispatch(receive_CommendThree(Recommend))
  }
}
export function getTenfifteen() {
  return async dispatch=>{
    const result = await getTenfifteenData();
    const Tenfifteen = result.data;
    dispatch(receive_Tenfifteen(Tenfifteen))
  }
}
export function getZhenThree() {
  return async dispatch=>{
    const result = await getZhenThreeData();
    const ZhenThree = result.data;
    dispatch(receive_ZhenThree (ZhenThree))
  }
}
export function getYxlook() {
  return async dispatch=>{
    const result = await getYxLookData();
    const Yxlook = result.data;
    dispatch(receive_Yxlook(Yxlook))
  }
}
export function getFindmore() {
  return async dispatch=>{
    const result = await getFindMoreData();
    const FindMore = result.data;

    dispatch(receive_Findmore(FindMore))
  }
}
export function getCategoryL1List() {
  return async dispatch=>{
    const result = await getCategoryL3ListData();
    const CategoryL3List = result.data;
    dispatch(receive_CategoryL1List(CategoryL3List))
  }
}
