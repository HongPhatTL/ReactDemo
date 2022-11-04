import React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App.js';
import App2 from './App_2.js'


  const container = document.getElementById("application-root");
  const root = ReactDOM.createRoot(container);

  root.render(
        <App/>
  )