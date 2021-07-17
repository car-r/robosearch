
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/header';
import CardList from './components/cardlist';

function App() {
  const [robots, setRobots] = useState([])

  useEffect(() => {
    const fetchRobots = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      console.log(result.data)
      setRobots(result.data)
    }
    fetchRobots()
  }, [])

  return (
    <div className="App">
      <Header />
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
