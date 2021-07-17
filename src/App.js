
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/header';
import CardList from './components/cardlist';
import SearchBox from './components/searchbox';

function App() {
  const [robots, setRobots] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchRobots = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      console.log(result.data)
      setRobots(result.data)
    }
    fetchRobots()
  }, [])

  const filteredRobots = robots.filter(robot => 
    robot.name.toLowerCase().includes(search.toLowerCase())
  )

const handleChange = (e) => {
  setSearch(e.target.value)
} 

  return (
    <div className="App">
      <Header />
      <SearchBox placeholder='search robots' handleChange={handleChange} />
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
