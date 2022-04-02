import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

// const chuckService = new ChuckService();
//
// chuckService.getAllCategories().then(res => console.log(res))
// chuckService.getJoke('').then(res => console.log(res.value))


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
