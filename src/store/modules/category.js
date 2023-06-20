import {getCategory} from '@/api/category'
import { ALL_CATEGORY_ITEM,CATEGORY_NOMAR_DATA  } from '@/constants'

export default {
    //独立作用域
    namespaced:true,
    state:()=>({
        //navigationBar展示的数据源
        categorys:CATEGORY_NOMAR_DATA 
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