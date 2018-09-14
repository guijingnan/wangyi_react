import {combineReducers} from 'redux'
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
const initData={
  headCateList:[],
  tagList:[],
  newItemList:[],
  TopicList:[],
  cateList:[],
  banner:[],
  column:[],
  knowledge:[]
}
function info(state=initData,action) {
  console.log(action)
  switch (action.type){
    case AUTH_SUCCESS:
      return {...state,headCateList:action.data};
    case TAGLIST_SUCCESS:
      return{...state,tagList:action.data};
    case NEWITEM_LIST_SUCCESS:
      return{...state,newItemList:action.data};
    case TOPICLIST_SUCCESS:
      return{...state,TopicList:action.data};
    case CATELIST_SUCCESS:
      return{...state,cateList:action.data};
    case BANNER_SUCCESS:
      return{...state,banner:action.data};
    case COLUMN_SUCCESS:
      return{...state,column:action.data};

    default:
      return state
  }

}
const knowData={
  recommendOne:[],
  recommendTwo:[],
  recommendThree:[],
  Tenfifteen:[],
  zhenThree:[],
  yanXuan:[],
  findMore:[]
}
function Knowledge(state=knowData,action) {
  switch (action.type){
    case RECOMMENDONE_SUCCESS:
      return{...state,recommendOne:action.data};
    case RECOMMENDTWO_SUCCESS:
      return{...state,recommendTwo:action.data};
    case RECOMMENDTHREE_SUCCESS:
      return{...state,recommendThree:action.data};
    case TENFIFTEEN_SUCCESS:
      return{...state,Tenfifteen:action.data};
    case ZHENTHREEDATA_SUCCESS:
      return{...state,zhenThree:action.data};
    case YXLOOK_SUCCESS:
      return{...state,yanXuan:action.data};
    case FINDMORE_SUCCESS:
      return{...state,findMore:action.data};
    default:
      return state
  }
}
const initClassify={
  categoryL1List:[]
}
function Classify(state=initClassify,action){
  switch (action.type){
    case CATEGORYL1LIST_SUCCCESS:
      return{...state,categoryL1List:action.data};
    default:
      return state
  }
}
export default combineReducers({
  info,
  Knowledge,
  Classify
})