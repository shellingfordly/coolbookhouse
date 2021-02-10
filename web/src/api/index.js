import http from './http'
import Url from './url'

export function getBookList() {
  return http(Url.getBookListUrl)
}

export function addBook(params) {
  return http(Url.addBookUrl, params, 'post')
}

export function searchBook(params) {
  return http(Url.searchBookUrl, params, 'post')
}

export function updateBook(params) {
  return http(Url.updateBookUrl, params, 'post')
}

export function deleteBook(params) {
  return http(Url.deleteBookUrl, params, 'post')
}

