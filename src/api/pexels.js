import request from '@/utils/request'

/**
 * 获取图片数据列表
 */
export const getPexelsList = (data) => {
  return request({
    url: './pexels/list',
    params: data
  })
}
/**
 * 获取搜索提示
 */
export const getHint = (q) => {
  return request({
    url: '/pexels/hint',
    params: {
      q
    }
  })
}

/**
 * 获取推荐主题
 */
export const getThemes = () => {
  return request({
    url: '/pexels/themes'
  })
}
/**
 * 获取item详情页
 */
export const getPexelsFromId = (id) => {
  return request({
    url: `/pexels/${id}`
  })
}
