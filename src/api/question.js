import request from "../utils/request"
/**
 * 获取问题列表
 * @returns 
 */
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
/**
 * 获取问题分类
 * @returns 
 */
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
export function addQuestion(title,data,types,images){
  let sendData = {
    title,
    data,
    types,
    images
  }
  return request({
    url:"/question",
    method:"post",
    data:sendData
  })
}
// 更改问题
export function updateQuestion(id,title,data,images,types=[]){
  return request({
    url:"/question",
    method:"put",
    data:{
      id,title,data,images,types
    }
  })
}
// 根据类型查找问题
export function getQuestionListByType(id){
  return request({
    url:`/question/byType/${id}`,
    method:"get",
  })
}

// 删除评论
export function deleteComment(id){
  return request({
    url:`/question/${id}`,
    method:"delete",
  })
}

// 获取问题评论列表
export function getQuestionCommentList(id){
  return request({
    url:`/comment/getQuestionComment/${id}`,
    method:"get"
  })
}
// 点赞问题
export function likeQuestion(id){
  return request({
    url:`/like/likeQuestion/${id}`,
    method:"post"
  })
}
// 收藏问题
export function collectQuestion(id){
  return request({
    url:`/collect/collectQuestion/${id}`,
    method:"post"
  })
}

// 添加评论
export function addQuestionComment(data,questionId){
  return request({
    url:"comment/toQuestion",
    method:"post",
    data:{
      data,questionId
    }
  })
}