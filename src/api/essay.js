import request from "../utils/request"
// 获取文章列表
export function getEssayList(){
  return request({
    url:"/text/list",
    method:"get",
  })
}
// 获取文章分类
export function getEssayType(){
  return request({
    url:"/text/type",
    method:"get",
  })
}
// 随机文章分页 10
export function getEssayPageRandom(){
  return request({
    url:"/text/pageRandom",
    method:"get",
  })
}
// 添加文章
export function addEssay(title,data,images,types){
  return request({
    url:"/text",
    method:"post",
    data:{
      title,
      data,
      images,
      types
    }
  })
}
// 更改文章
export function updateEssay(id,title,data,images,types){
  return request({
    url:"/text",
    method:"put",
    data:{
      id,
      title,
      data,
      images,
      types
    }
  })
}
// 根据类型查找文章
export function getEssayListByType(id){
  return request({
    url:`/text/byType/${id}`,
    method:"get",
  })
}
// 添加评论
export function addEssayComment(data,userId,textId){
  return request({
    url:"/comment/toText",
    method:"post",
    data:{
      data,
      userId,
      textId
    }
  })
}
// 删除文章
export function deleteEssayComment(id){
  return request({
    url:`/text/${id}`,
    method:"delete",
  })
}
// 获取单个文章
export function getEssayComment(id){
  return request({
    url:`/text/${id}`,
    method:"get",
  })
}