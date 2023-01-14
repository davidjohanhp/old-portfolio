import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import Intro from './components/intro';

import './style.css';


ReactDOM.render(
  <React.StrictMode>
    <Intro />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
