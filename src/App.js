import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      const myData = res.data
      console.log('myData:', myData)
      setData(myData)
    }

    getData()
    
  }, [])

  


  return (
    <div className="App">
      <header className="App-header">
          <table>
            <tr><td>USD</td></tr>
            <tr><td>{data && data.bpi && data.bpi.USD != undefined && data.bpi['USD']['rate']}</td></tr>
          </table>
      
      </header>
    </div>
  );
}

export default App;
