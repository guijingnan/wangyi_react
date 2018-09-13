import Mock from 'mockjs'
import homeData from './home.json'
import knowledgeData from './shiwu_data.json'
import fenleiData from './fenlei_data.json'
Mock.mock('/home',{code:0,data:homeData});
Mock.mock('/headCateList',{code:0,data:homeData.headCateList});
Mock.mock('/tagList',{code:0,data:homeData.tagList})
Mock.mock('/newItemList',{code:0,data:homeData.newItemList})
Mock.mock('/topicList',{code:0,data:homeData.topicList})
Mock.mock('/cateList',{code:0,data:homeData.cateList});
Mock.mock('/column',{code:0,data:knowledgeData.column});
Mock.mock('/knowledge',{code:0,data:knowledgeData});
Mock.mock('/banner',{code:0,data:knowledgeData.banner});
Mock.mock('/recommendOne',{code:0,data:knowledgeData.recommendOne});
Mock.mock('/recommendTwo',{code:0,data:knowledgeData.recommendTwo});
Mock.mock('/recommendThree',{code:0,data:knowledgeData.recommendThree});
Mock.mock('/tenfifteen',{code:0,data:knowledgeData.tenfifteen})
Mock.mock('/zhenThree',{code:0,data:knowledgeData.zhenThree});
Mock.mock('/yxLook',{code:0,data:knowledgeData.yxLook});
Mock.mock('/findMore',{code:0,data:knowledgeData.findMore});
Mock.mock('/classify',{code:0,data:fenleiData});
Mock.mock('/shopping',{code:0,data:knowledgeData});
Mock.mock('/personal',{code:0,data:knowledgeData});
