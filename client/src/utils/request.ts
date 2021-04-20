import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
  // baseURL: 'http://localhost:5000/', // url = base url + request url
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
          console.log("OK Response !== 20000")
          console.log(response)
          return response
        } else {
          console.log("OK Response.data")
          console.log(response.data)
          return response.data
        }
      } else {
        console.log("OK Response")
        console.log(response)
        return response
      }
    },
    (error) => {
      console.log("ERREUR")
      return Promise.reject(error)
    }
)
