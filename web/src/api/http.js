  
import axios from 'axios'

axios.interceptors.response.use(res => res.data)

export default function http(url, data = {}, method = 'get') {
  let p;
  return new Promise(res => {
    if (method === "get") {
      p = axios.get(url, {
        params: data
      })
    } else {
      p = axios.post(url, data)
    }
    p.then(resolve => {
      res(resolve)
    })
  })
}