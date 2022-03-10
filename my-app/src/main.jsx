import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const root = document.querySelector('#root');

const myName = 'Linh';
const myAge = 20;
const myStatus = true;
const myInfo = {
  name: 'Linh',
  age: 20,
  status: true
}

function showInfo(props) { //{name: 'Linh'}
  return <p> Xin chào bố {props.name}</p >
}


ReactDOM.render(
  <div>
    <div>{showInfo({ name: 'Linh' })}</div>
  </div>, root);








