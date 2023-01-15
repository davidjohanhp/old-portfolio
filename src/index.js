import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Navbar from './components/navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    <Portfolio />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
