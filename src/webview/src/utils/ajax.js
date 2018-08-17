// 接口请求
import axios from 'axios'
import qs from 'qs'

let baseURL = '';
let api = '';
// process.env.NODE_ENV !== 'development' ? baseURL = process.env.BASE_API : api = '/api';

export default function (opt) {
    let ContentType = 'application/json;charset=UTF-8';
    if (opt.ContentType === 'form') {
        ContentType = 'application/x-www-form-urlencoded';
    } else if (opt.ContentType === 'form-data') {
        ContentType = 'multipart/form-data';
    }
    var dataList = {
        method: opt.method,
        url: `${api}${opt.url}`,
        timeout: 5000,
        baseURL,
        headers: {
            'Content-Type': ContentType,
        }
    }
    if (['post', 'put'].includes(opt.method)) {
        opt.ContentType === 'form' ? dataList.data = qs.stringify(opt.data) : dataList.data = opt.data;
    } else {
        dataList.params = opt.data;
    }
    return new Promise((resolve, reject) => {
        axios(dataList)
            .then(res => {
                let body = res.data
                // if (body.code == 200 || body.code == 201) {
                resolve(body)
                // } else {
                //     body.data.msg = body.data.content
                //     reject(body.data)
                // }
            })
            .catch(error => {
                reject(error.data)
            })
    })
}

// 发送请求前处理数据
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// 返回响应请求后处理数据
axios.interceptors.response.use(res => {
    return res
}, error => {
    let errorCode = error.response.status;
    if (errorCode === 401) {
    } else if ([404, 405, 500, 504].includes(errorCode)) {
        error.response.data = {
            msg: '网络错误,请稍后重试!'
        };
    }
    return Promise.reject(error.response)
});