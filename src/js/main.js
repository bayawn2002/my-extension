import React from 'react';
import ReactDOM from 'react-dom';
//import AppBody from './components/AppBody';
import '../App.css';

//import history from './components/history';
import { MemoryRouter as Router , Route/*, Redirect, withRouter*/} from 'react-router-dom';
import Home from './components/pages/Home';
import Test from './components/pages/Test';
import Header from './components/common/Header';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isCollapsed : false,
      toggleText : 'collapse'
    };

    this.toggle = this.toggle.bind(this);
    //history.push('/home');
  }

  toggle(){
    if(!this.state.isCollapsed)
      this.setState({isCollapsed : true, toggleText : 'expand'});
    else
      this.setState({isCollapsed : false, toggleText : 'collapse'});
  }

  render() {
    return (
      <div class="main-app">
        <button onClick={this.toggle}>{this.state.toggleText}</button>
        <div className={this.state.isCollapsed ? 'main-app-body collapsed' : 'main-app-body expanded'}>
          <Router>
            <div>
                <Header/>

                <Route path="/home" component={Home} />
                <Route path="/test" component={Test} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

// Message Listener function
//chrome.runtime.onMessage.addListener((request, sender, response) => {
window.onload = () => {
  //if(request.injectApp) {
    injectApp();

    //response({
    //  startedExtension: true,
    //});
  //}
  //});

  //var reviewPage = $('.rl-view-review-plan');
  //if(typeof reviewPage !== 'undefined'){
  //  console.log($('.rl-line1'))
  //}


}

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}
