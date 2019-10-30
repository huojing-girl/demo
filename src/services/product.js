//第二个文件:   M层


import HTTP from '../request/http'
const _http =new HTTP()

class Product {
    bargin(){
        return _http.request({
            url:'https://api.it120.cc/small4/shop/goods/kanjia/list'
        })
    }
    chosen(){
       return  _http.request({
            url:'https://api.it120.cc/small4/cms/news/list',
        })
    }
    recommend(){
        return _http.request({
            url:'https://api.it120.cc/small4/shop/goods/list'
        })
    }
    bc(){
        return _http.request({
            url:'https://api.it120.cc/small4/shop/goods/kanjia/list'
        })
    }
    cc(){
        return _http.request({
            url:'https://api.it120.cc/small4/cms/news/list'
        })
    }
    sort(){
        return _http.request({
            url:'https://api.it120.cc/small4/shop/goods/category/all'
        })
    }
    //登录
    login(obj){
        return _http.request({
            type:'post',
            url:`https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=${obj.mobile}&pwd=${obj.pwd}`,
            data:{
                // mobile:obj.mobile,
                // pwd:obj.pwd
            }
        })
    }
    //用户信息
    user(tonum){
        return _http.request({
            type:'post',
            url:`https://api.it120.cc/small4/user/detail?token=${tonum}`,
            data:{
                // token:tonum
            }
        })
    }
    //注册
    register(obj){
        return _http.request({
            type:'post',
            url:'https://api.it120.cc/small4/user/m/register',
            data:{
                mobile:mobile,
                pwd:pwd,
                code:code,
                nick:nick,
                province:province,
                city:city,
                postJsonString:postJsonString,
            }
        })
    }

    //省
    sheng(){
        return _http.request({
            type:'post',
            url:'https://api.it120.cc/common/region/province'
        })
    }
    shi(id){
        return _http.request({
            type:'post',
            url:`https://api.it120.cc/common/region/child?pid=${id}`,
            data:{
                // pid: id
            }
        })
    }
    
}

export default Product