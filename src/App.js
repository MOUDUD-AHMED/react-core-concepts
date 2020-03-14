import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

  function App() {
    let person = {
      name : "Solaiman",
      job : "Facebook celebrity"
    }
    let person2 = {
      name : "Salman",
      job : "Youtuber"
    }
    const friends = ['Lalto', 'Bolto', 'Salto', 'Kulto', 'Alim', 'Kolim', 'Salim','Sallu','Sokina','Salika']

    const productList = [
      {name: 'Photoshop', price: '$90.99', description:'This is an awesome apps for making fun!'},
      {name: 'Illustrator', price: '$88.99', description:'This is an awesome apps for making fun!'},
      {name: 'PDF Reader', price: '$40.99', description:'This is an awesome apps for making fun!'},
      {name: 'Canon Camera', price: '$899.99', description:'This is an awesome apps for making fun!'},
      {name: 'Mac book pro', price: '$999.99', description:'This is an awesome apps for making fun!'}
  ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              friends.map(friend => <li>{friend}</li>)
            }
          </ul>
          <ol>
            {
              productList.map(product => <li>Name :{product.name} Price:  {product.price}</li>)
            }
          </ol>
          {
             //productList.map(productLi => <Products productt={productLi}></Products>)
          }
          <Products productDetails={productList[0]}></Products>
          <Products productDetails={productList[1]}></Products>
          <Products productDetails={productList[2]}></Products>
          <Products productDetails={productList[3]}></Products>
          <Products productDetails={productList[4]}></Products>
         
          <h2>Person name is : {person.name + " " + person.job}</h2>
          <h4>Another person name is : {person2.name + " " + person2.job}</h4>
          <Moudud name="Seikh Hasina" title="President"></Moudud>
          <Moudud name="Abul Mal" title="Financial Advisor"></Moudud>
          <Moudud name="Shakib Al Hasan" title="Cricketer"></Moudud>
          <Moudud name="Shakib Khan" title="Hero"></Moudud>
        </header>
      </div>
    );
  }
  function Products(props){
    const productStyle= {
      border: '1px solid gray',
      borderRadius: '10px',
      width: '300px',
      height: '350px',
      backgroundColor: 'lightgray',
      marginTop: '10px',
      color: 'black'
    }
    const {name, price, description} = props.productDetails;

    return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h1>{price}</h1>
        <p>{description}</p>
        <button>Buy now</button>
      </div>
    )
  }

  function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    //const handleDecrease = () => setCount(count - 1);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
    }, [])
    return(
      <div>
        <h2>Dynamic users: {users.length}</h2>
        <ol>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ol>
      </div>
    )
  }

  function Moudud(props){
    const moududStyle={
      border: '5px solid yellow',
      margin: '10px',
      borderRadius: '10px',
      width: '500px'
    }

    return(
    <div style={moududStyle}>
      <h1>{props.name}</h1>
      <h4>Current position : {props.title}</h4>
    </div>
    )
  }

export default App;
