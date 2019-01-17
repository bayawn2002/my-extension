import React from 'react';
import ReactDOM from 'react-dom';

import Customer from '../components/Customer';

class AppBody extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dealergroups : []
    };

    this.loadDealergroups = this.loadDealergroups.bind(this);
  }

  loadDealergroups(){
    return fetch('http://localhost:9763/api/v1/dealergroups', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'//,
        //'Authorization' : auth.getAuthToken()
      }
    })
    .then( result => {
      return result.json();
    })
    .then( data => {
      //console.log(data)
      this.setState({dealergroups: data.data});
    })
    .catch((error) => alert(error));
  }

  render() {
    return (
        <div className={this.props.isCollapsed ? 'main-app-body collapsed' : 'main-app-body expanded'}>
          <Customer customerName="Bob Willy" />

          <button onClick={this.loadDealergroups}>Load DealerGroups</button>
          <ul>
            {this.state.dealergroups.map(i => <li>{i.name}</li>)}
          </ul>
        </div>
    )
  }
}

export default AppBody;
