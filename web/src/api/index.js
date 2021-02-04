import http from './http'

export function getBookList(){
  return http('http://182.61.19.153:8080/book/get.list.1.0.0')
}

export function addBook(params){
  return http('http://182.61.19.153:8080/book/add.1.0.0', params, 'post') 
}

export function searchBook(params){
  return http('http://182.61.19.153:8080/book/search.1.0.0', params, 'post') 
}
