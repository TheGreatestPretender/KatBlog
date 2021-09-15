import React, { useState, useEffect } from 'react';

//personal components
import Header from './components/Header';
import About from './components/About';

import axios from 'axios';
import {
  Card,
  CardContent,
} from '@material-ui/core';


//styling
import './App.css';

function App() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCardClick = () => {
    console.log('clicked')
  }

  useEffect(() => {
    setTimeout(async () => {
      let urls = [];
      await axios.get(`https://api.github.com/users/TheGreatestPretender/repos`)
      .then(data => {
        data = data.data;
        data.forEach(item => urls.push(item.html_url))
        setRepos(urls)
      })
      setLoading(false)
    }, 5000)
  }, []);

  return (
    <div className="App">
      <Header>Hi I'm Kat!</Header>
      <h2>I'm a full-stack engineer who identifies as&nbsp; <a href="https://transequality.org/issues/resources/understanding-non-binary-people-how-to-be-respectful-and-supportive">non-binary</a></h2>
      <About />
      <br/>

      {
        loading ? 
          <i class="fas fa-spinner"/>
          :
          repos.map((entry, idx) => {
            return (
            <Card onClick={handleCardClick} className="card container">
              <CardContent>
                  <a href={entry}>
                      {entry}
                  </a>
              </CardContent>
            </Card>)
          })
      }

    </div>
  );
}

export default App;
