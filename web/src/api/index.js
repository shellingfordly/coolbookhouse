import axios from 'axios'

export function getBookList(){
  return new Promise(resolve=>{
    axios.get('http://182.61.19.153:8080/book/get.list.1.0.0').then((res)=>{
      resolve(res)
    })
  })
}

export function addBook(params){
  return new Promise(resolve=>{
    axios.post('http://182.61.19.153:8080/book/add.1.0.0', params).then((res)=>{
      resolve(res)
    })
  })
}