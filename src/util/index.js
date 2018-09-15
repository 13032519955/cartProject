export let sendFetch = ( url,{method="GET",body={},resType="json"}={}) =>{
    //处理url,添加时间戳,解决缓存问题
    if((typeof url).toLowerCase() === "string"){
        if(url.includes("?")){
            url += `&time=${+new Date()}`;
        }else{
            url += `?&time=${+new Date()}`;
        }
    }else{
        let err = new Error("请输入正确url请求地址--util-sendFetch(url)")
        alert(err);
        return false;
    };
    
    if(method==="GET" || method==="get"){
        return fetch(url).then(response=>response[resType]());
    }else{
        return fetch(url, {
            body: JSON.stringify(data),
            method: 'POST', 
          })
          .then(response => response[resType]())
    };
}   