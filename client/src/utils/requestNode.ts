import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
  //baseURL: 'http://localhost:9527/', // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_NODE, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})


export default service


// Response interceptors
service.interceptors.response.use(
    (response) => {
      const res = response.data
      if (res.code) {
        if (res.code !== 20000) {
          return response
        } else {
          return response.data
        }
      } else {
        return response
      }
    },
    (error) => {
      return Promise.reject(error)
    }
)
