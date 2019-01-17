import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('viewport'));


//const app = document.createElement('div');
//app.id = "my-extension-root";
//document.body.appendChild(app);
//console.log(document.body)
//ReactDOM.render(<ContentReact />, app);

const viewport = document.getElementById('viewport');
alert(viewport)
const app = document.createElement('div');
app.id = 'root';
if (viewport) viewport.prepend(app);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
