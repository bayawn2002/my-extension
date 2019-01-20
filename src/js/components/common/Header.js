import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import auth from '../../helpers/Auth';

function Header(props) {
  //if(!auth.isAuthenticated())
  //  return null;

  const logout = () => {
    auth.logout();

    props.history.replace('/login');
  }

  return (
      <div>
        <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>

        <button onClick={() => {logout()}}>Log Out</button>
      </div>
  );
}

export default withRouter(Header);
