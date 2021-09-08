import './App.css';

import Header from './components/Header';
import About from './components/About';
import Card from './components/Card/Card';

const arr = ['this', 'will', 'be', 'filled', 'with', 'different', 'projects']

function App() {
  return (
    <div className="App">
      <Header>Hi I'm Kat!</Header>
      <h2>I'm a full-stack engineer who identifies as &nbsp; <a href="https://transequality.org/issues/resources/understanding-non-binary-people-how-to-be-respectful-and-supportive">non-binary</a></h2>
      <About />
      <br/>
      <Card list={arr}/>

      <p>
        Links to projects
      </p>
    </div>
  );
}

export default App;
