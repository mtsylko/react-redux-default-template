import { postRequest } from '../reequestUtils'

class LoginDao {

  login(credentials) {
    return postRequest('/auth', credentials)
  }

  fakeLogin(credentials) {
    return new Promise((resolve, reject) => {
      const { username, password } = credentials;
      if(username === 'Max' && password === '111') {
        setTimeout(() => resolve({status: 200, message: 'success', token: 'fake_token'}) , 1000);
      } else {
        setTimeout(() => reject({status: 401 , message: 'Incorrect credentials'}) , 1000);
      }
    });
  }

}

const loginDao = new LoginDao();
export default loginDao;
