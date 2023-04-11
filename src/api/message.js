import request from "../utils/request"
/**
 * 谁收藏了我
 * @returns Promoise
 */
export function collectMe(){
  return request({
    url:"/news/whoCollectMe",
    method:"get"
  })
}
/**
 * 谁给我点赞
 * @returns 
 */
export function likeMe(){
  return request({
    url:"/news/whoLikeMe",
    method:"get"
  })
}

export function commentMe(){
  return request({
    url:"/news/whoCommentMe",
    method:"get"
  })
}