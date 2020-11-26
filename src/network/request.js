import axios from 'axios'

export function request(config) {
  //在创建instance后，返回的类型就是Promise，所以直接返回
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  //1.请求拦截
  axios.interceptors.request.use(config => {
      //console.log(config);
      return config
    },err => {
      //console.log(err);
    })

  //2.响应拦截
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res.data
  },err => {
    //console.log(err);
  })

  return instance(config)
}
