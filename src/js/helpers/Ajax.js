import auth from './Auth';

export function get(url, data){
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : auth.getAuthToken()
    }
  })
  .then( result => {
    return result.json();
  })
  .catch((error) => alert(error));
}

export function post(url, data){
  return fetch(url, {
    method: 'POST',
    //mode: 'cors',
    headers: {
      //Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then( result => {
    return result.json();
  })
  .catch((error) => alert(error));
}
