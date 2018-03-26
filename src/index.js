import React from 'react';
import ReactDOM from 'react-dom';
import App from './reactDemo/App';
import './css/index.css';
import './css/reset.css';
import "./css/video-react.css";
import './reactDemo/component/Mobile.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , 
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();	//让页面无刷新
}
