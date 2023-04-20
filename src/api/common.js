import request from "../utils/request"
// 上传图片
export function uploadImage(file){
  return request({
    url:"/images/uploadCos",
    method:"post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data:{
      image:file
    }
  })
}
// 搜搜
export function search(title){
  console.log(title);
  return request({
    url:"/search",
    method:"get",
    params:{
      title
    }
  })
}

