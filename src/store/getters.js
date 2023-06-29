import {isMobileTerminal} from '@/utils/flexible'
export default {
    categorys: (state) => state.category.categorys,
    themeType: (state) => state.theme.themeType,
    /**
     * category选中项
     * @param {*} state 
     * @returns 
     */
    currentCategory: (state) => state.app.currentCategory,
    /**
     * category选中项下标
     */
    currentCategoryIndex: (state,getters)=>{
      return getters.categorys.findIndex(
        (item)=> item.id === getters.currentCategory.id
      )
    },
    historys:(state)=> state.search.historys,
    searchText:(state) => state.app.searchText,
    token:(state) => state.user.token,
    userInfo:(state) => state.user.userInfo,
    //路由跳转方式
    routerType:(state) => {
      //在pc端下
      if(!isMobileTerminal.value){
        return 'none'
      }
      return state.app.routerType
    }
  }
  