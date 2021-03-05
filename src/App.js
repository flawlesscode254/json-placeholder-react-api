import './App.css';
import { useState, useEffect } from 'react';
import Users from './Users'

function App() {
  const [list, setList] = useState([]);


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((json) => setList(json));

}, [])

  return (
    <div className="App">
        {
          list.map(data => (
            <Users
              key = {data.id}
              title = {data.title}
              src = {data.url}
            />
          ))
        }
    </div>
  );
}

export default App;
