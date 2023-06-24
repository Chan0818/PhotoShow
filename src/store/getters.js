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
    historys:(state)=> state.search.historys
  }
  