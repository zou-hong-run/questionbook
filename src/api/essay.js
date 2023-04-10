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
