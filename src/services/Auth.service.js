export default class AuthHttpService {

  constructor (http) {
    this.http = http
    this.UrlList = {
      login: 'http://localhost:3000/auth/login',
      register: 'http://localhost:3000/auth/register'
    }
  }

  Login (userData) {
    return this.http.post(this.UrlList.login, {
      username: userData.username,
      password: userData.password
    })
      .then((response) => {
        return response.data
      })
  }

  Register (userData) {
    return this.http.post(this.UrlList.register, {
      username: userData.username,
      password: userData.password,
      role: userData.role
    })
      .then((response) => {
        return response.data
      })
  }

}
