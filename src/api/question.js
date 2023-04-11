import request from "../utils/request"
// 获取问题列表
export function getQuestionList(){
  return request({
    url:"/question/list",
    method:"get"
  })
}
// 获取单个问题
export function getQuestionById(id){
  return request({
    url:`/question/${id}`,
    method:"get",
  })
}
// 获取问题分类
export function getQuestionType(){
  return request({
    url:"/question/type",
    method:"get",
  })
}
// 随机问题分页 10
export function getQuestionPageRandom(){
  return request({
    url:"/question/pageRandom",
    method:"get",
  })
}
// 添加问题
export function addQuestion(){
  return request({
    url:"/question",
    method:"post",
  })
}
// 更改问题
export function updateQuestion(){
  return request({
    url:"/question",
    method:"put",
  })
}
// 根据类型查找问题
export function findQuestionByType(id){
  return request({
    url:`/question/byType/${id}`,
    method:"get",
  })
}
// 添加评论
export function addQuestionComment(msg,data,code){
  return request({
    url:"comment/toQuestion",
    method:"post",
    data:{
      msg,
      data,
      code
    }
  })
}
// 删除评论
export function deleteComment(id){
  return request({
    url:`/question/${id}`,
    method:"delete",
  })
}