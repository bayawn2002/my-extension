import {get} from './Ajax';

class Auth {
  constructor(){
    this.isAuthenticated = this.isAuthenticated.bind(this);
    //this.
  }

  getAuthToken(){
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get('test-ext', function(data){
        var authToken = false;
        if(data.hasOwnProperty('test-ext'))
          authToken = data['test-ext'];

        resolve(authToken);
      });
    });
  }

  isAuthenticated(){
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get('test-ext', function(data){
        console.log('get')
        console.log(data)
        var isAuthenticated = false;
        if(data.hasOwnProperty('test-ext'))
          isAuthenticated = true;

        resolve(isAuthenticated);
      });
    });
    /*if(localStorage.getItem('authToken') !== null)
      return true;
    else {
      return false;
    }*/
  }

  login(username, password){
    return get(process.env.REACT_APP_API_HOST + ':' + process.env.REACT_APP_API_PORT + '/' + process.env.REACT_APP_API_PATH + 'login?u=' + username + '&p=' + password)
    .then( data => {
      console.log('data');
      console.log(data)
      if(typeof data === "undefined" || data.loginFailed)
        return data;

      return new Promise(function (resolve, reject) {
        chrome.storage.sync.set({ 'test-ext' : data.sessionId}, function(){
          console.log('finished');
          resolve(data);
        });
      });
      //localStorage.setItem('authToken', data.sessionId);
    });
  }

  logout(){
    chrome.storage.sync.remove('test-ext', function(data){
      console.log('removed');
      chrome.storage.sync.get('test-ext', function(data){
        console.log(data);
      });
    });
    //localStorage.removeItem('authToken');
  }
}

const auth = new Auth();
export default auth;
