import request from "../utils/request"
/**
 * 获取用户详情
 * @returns 
 */
export function getInfo(){
  return request({
    url:"/user",
    method:"get"
  })
}
/**
 * 我的问题
 * @returns 
 */
export function myQuestion(){
  return request({
    url:"/question",
    method:"get"
  })
}
/**
 * 我的文章
 * @returns 
 */
export function myEssay(){
  return request({
    url:"/text",
    method:"get"
  })
}
/**
 * 我的收藏
 * @returns 
 */
export function myCollect(){
  return request({
    url:"/collect",
    method:"get"
  })
}
/**
 * 我的点赞
 * @returns 
 */
export function myLike(){
  return request({
    url:"/like",
    method:"get"
  })
}
/**
 * 修改密码
 * @returns 
 */
export function updatePwd(password){
  return request({
    url:"/user/updatePassword",
    method:"get",
    data:{
      password
    }
  })
}
// 更新用户信息
export function updateUser(name,image){
  return request({
    url:"/user/updateUser",
    method:"post",
    data:{
      name,
      image
    }
  })
}