import http from './http'

export function getBookList(){
  return http('http://localhost:8080/book/get.list.1.0.0')
}s

export function addBook(params){
  return http('http://localhost:8080/book/add.1.0.0', params, 'post') 
}