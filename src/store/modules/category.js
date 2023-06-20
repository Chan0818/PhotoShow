import {getCategory} from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
    //独立作用域
    namespaced:true,
    state:()=>({
        //navigationBar展示的数据源
        categorys:[ALL_CATEGORY_ITEM]
    }),
    mutations:{
        /**
         * 为categorys赋值
         */
        setCategorys(state,categorys){
            state.categorys = [ALL_CATEGORY_ITEM,...categorys]
        }
    },
    actions:{
        /**
         * 获取category数据保存到vuex中
         */
        async useCategoryData(context){
            const {categorys} = await getCategory()
            context.commit('setCategorys',categorys)
        }
    }
}