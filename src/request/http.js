//定义一个文件  -  Axios封装

import Axios from 'axios'
import QS from 'qs'

//定义HTTP类
class HTTP {
    //HTTP 下面的方法
    request(params) {

        return new Promise((resolve, reject) => {
            Axios({
                method: params.type  || "get",
                url: params.url,
                data: params.data
            }).then(res => {
                resolve(res)
            })
        })

    }
}

export default HTTP