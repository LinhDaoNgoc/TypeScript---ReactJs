import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ShowInfo from './Components/ShowInfo'

function App() {
  // const products = [
  //   { id: 1, name: '  sản phẩm A' },
  //   { id: 2, name: '  sản phẩm B' },
  //   { id: 3, name: '  sản phẩm C' },
  // ]
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState('Linh');
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: '  sản phẩm A' },
    { id: 2, name: '  sản phẩm B' },
    { id: 3, name: '  sản phẩm C' },
  ]);
  const tangCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      Count: {count} <button onClick={tangCount}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName('Kien')}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggle</button>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfo name=" Linh" />
      <ShowInfo name=" Huy" />
      <ShowInfo name=" Hiep" />
    </div>
  )
}

export default App
