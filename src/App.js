import { React } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header.js';
//import Menu from './components/Menu.js';
import Main from './routes/Main.js';
import Player from './routes/Player.js';
import Dashboard from './routes/Dashboard.js';
import Grid from '@mui/material/Grid';
import './App.css';
import AuthContextProvider from './contexts/AuthContext.js';

const App = () => {
  return (
        <Router>
          <AuthContextProvider>
            <Switch>

              <Route exact path='/'>
                <Grid container spacing={3} className='grid-container'>
                  <Grid item xs={12}>
                      <Header/>
                  </Grid>
                  <Grid item xs={1.6}>
                    {/* <Menu/> */}
                  </Grid>
                  <Grid item xs={10.4}>
                    <Main/>
                  </Grid>
                </Grid>
              </Route>

              <Route exact path='/player'>
                <Player/>
              </Route>

              <Dashboard/>

            </Switch>
          </AuthContextProvider>
        </Router>
  )
}

export default App;