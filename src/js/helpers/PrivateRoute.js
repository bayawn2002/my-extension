import React from 'react';

import { Route, Redirect} from 'react-router-dom';

import auth from './Auth';

/*export class PrivateRoute extends Route {
  render() {
    //console.log(this.props)

    //let component = super.render();
//console.log(component)
    if(this.props.path !== '/login'){
      console.log('isAuthenticated')
      //.log(auth.isAuthenticated())
      var isAuthenticated = false; //auth.isAuthenticated();
      if(isAuthenticated){
        let Component = this.props.component;
            return <Component />
      }else{
        console.log('redirect to login')
        return <Redirect to={{
          pathname: '/login'//,
          //state: { from: this.props.path }
        }} />;
      }
      //return auth.isAuthenticated() //localStorage.getItem('authToken') !== null
      //?  <Component />
      //: ( <Redirect to={{
      //    pathname: '/login',
      //    state: { from: this.props.location }
      //  }} /> )
    }else{
      console.log('already on login page')
      return null;
    }
  }
}*/
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => {
       if(props.location.pathname !== '/login'){
         console.log('isAuthenticated')
         //.log(auth.isAuthenticated())

         async function isAuthenticated(){
           return await auth.isAuthenticated();
         }
         var isAuthenticated = isAuthenticated();
         return isAuthenticated //localStorage.getItem('authToken') !== null
         ?  <Component />
         : ( <Redirect to={{
             pathname: '/login',
             state: { from: props.location }
           }} /> )
         }else{
           console.log('already on login page')
           return null;
         }
       }
     } />
)
