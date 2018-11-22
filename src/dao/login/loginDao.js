class LoginDao {

  login(credentials) {
    return new Promise((resolve, reject) => {
      const { username, password } = credentials;
      if(username === 'Max' && password === '111') {
        //resolve({status: 200, message: 'success', token: 'fake_token'});
        setTimeout(() => resolve({status: 200, message: 'success', token: 'fake_token'}) , 1000);
      } else {
        //reject({status: 401 , message: 'Incorrect credentials'});
        setTimeout(() => reject({status: 401 , message: 'Incorrect credentials'}) , 1000);
      }
    });
  }

}

const loginDao = new LoginDao();
export default loginDao;
