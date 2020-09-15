export default class DataHttpService {
  constructor (http) {
    this.http = http
    this.UrlList = {
      getData: 'http://localhost:3000/data/get'
    }
  }

  GetData () {
    return this.http.get(this.UrlList.getData)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error
      })
  }
}
