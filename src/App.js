import React, { useEffect } from 'react';

//personal components
import Header from './components/Header';
import About from './components/About';
import CardList from './components/Card/CardList';

import axios from 'axios';

//styling
import './App.css';

function App() {

  let repoArr = [];
  useEffect(() => {


    axios.get(`https://api.github.com/users/TheGreatestPretender/repos`)
    .then(data => {
      data = data.data
      data.forEach(item => repoArr.push(item.html_url))
    })

    console.log(repoArr)
  });

  return (
    <div className="App">
      <Header>Hi I'm Kat!</Header>
      <h2>I'm a full-stack engineer who identifies as&nbsp; <a href="https://transequality.org/issues/resources/understanding-non-binary-people-how-to-be-respectful-and-supportive">non-binary</a></h2>
      <About />
      <br/>
      <CardList list={repoArr}/>

      <p>
        Links to projects
      </p>
    </div>
  );
}

export default App;
