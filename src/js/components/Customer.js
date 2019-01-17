import React from 'react';
import ReactDOM from 'react-dom';

//import '../AppBody.css';

class Customer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    };

    //this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
        <div className="customer">
          {this.props.customerName}
        </div>
    )
  }
}

export default Customer;
