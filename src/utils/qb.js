

/**
 * 
 * @param {name:"zhang",age:13} params 参数
 */
export function transParams(params){
  let result = ''
  for(const propName of Object.keys(params)){
    // propNam=>key
    const value = params[propName];// 拿到值
    let part = encodeURIComponent(propName)+"=";
    if(value !== null && typeof (value) !=="undefined"){
      if(typeof value === "object"){
        for(const key of Object.keys(value)){
          if(value[key] !== null && typeof (value[key]) !== "undefined"){
            let params = propName+'['+key+']';
            let subPart = encodeURIComponent(params)+"=";
            result += subPart + encodeURIComponent(value[key])+"&";
          }
        }
      }else{
        result += part+encodeURIComponent(value)+"&";
      }
    }
  }
  return result;

}

export function parseStr(str){
  return str.match(/[\u4e00-\u9fa5[.，、。]]{0,}/g).join("").slice(10,120)
}