import ajax from './ajax'
export const gethomeData = ()=>ajax('/home');
export const getKnowledgeData = ()=>ajax('/knowledge');
export const getClassifyData = () =>ajax('/classify');
export const getShoppingData= () =>ajax('/shopping');
export const getPersonalData = () =>ajax('/personal');
export const getheadCateList= ()=>ajax('/headCateList');
export const getTagListData = () =>ajax('/tagList');
export const getNewItemListData = () =>ajax('/newItemList');
export const getTopicListData = () => ajax('/topicList');
export const getCateListData = () => ajax('/cateList');
export const getBannerData = ()=>ajax('/banner');
export const getColumnData = () =>ajax('/column');
export const getRecommendOneData = () =>ajax('/recommendOne');
export const getRecommendTwoData = () =>ajax('/recommendTwo');
export const getRecommendThreeData = () =>ajax('/recommendThree');
export const getTenfifteenData = () =>ajax('/tenfifteen');
export const getZhenThreeData = () =>ajax('/zhenThree');
export const getYxLookData = () =>ajax('/yxLook')
export const getFindMoreData = () => ajax('/findMore')
