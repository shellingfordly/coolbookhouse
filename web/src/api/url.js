const BASE_URL = 'http://182.61.19.153:8080'

const urls = {
  getBookListUrl: '/book/get.list.1.0.0',
  addBookUrl: '/book/add.1.0.0',
  searchBookUrl: '/book/search.1.0.0',
  updateBookUrl: '/book/update.1.0.0',
  deleteBookUrl: '/book/delete.1.0.0'
}

function getUrl() {
  const res = {}
  for (const key in urls) {
    if (Reflect.has(urls, key)) {
      const url = urls[key];
      console.log(key);
      res[key] = BASE_URL + url
    }
  }
  return res
}

export default getUrl()