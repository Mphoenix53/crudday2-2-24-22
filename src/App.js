
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const getUsers = ()=>{
    axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      console.log('res:', res)
      console.log('res.data', res.data)
      console.log('res.data.data', res.data.data)
      setUsers(res.data.data)
    })
    .catch((err) => {
      console.log('err:', err)
    });
  
  };
  return (
    <div className="App">
      <h1>53</h1>
      <button onClick={getUsers}>Get info</button>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default App;
