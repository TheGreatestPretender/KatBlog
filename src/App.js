import './App.css';

import Header from './components/Header';
import About from './components/About';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Header style={{marginLeft: '-193px'}}>Hi I'm Kat! (They/Them)</Header>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>I'm a full-stack engineer who identifies as <a href="https://transequality.org/issues/resources/understanding-non-binary-people-how-to-be-respectful-and-supportive">non-binary</a></h1>
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>

      </Grid>



      <p>
        Links to projects
      </p>
    </div>
  );
}

export default App;
