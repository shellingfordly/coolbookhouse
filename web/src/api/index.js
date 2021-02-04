import axios from 'axios'

export function getBookList(){
  return axios.get('http://127.0.0.1:8080/book').then((res)=>{
    console.log(res);
  })
}