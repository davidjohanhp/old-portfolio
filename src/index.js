import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';

import './style.css';
import './animate.css';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css'

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'lightbox2/dist/js/lightbox.min.js';
import './libs/easing.js';

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <About />
    <Skills />
    <Portfolio />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
