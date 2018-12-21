import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GamePage from './gamePage';
import SettingsPage from './settingsPage';
import StartPage from './startPage';
import GameOverPage from './gameOverPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={StartPage} />
        <Route path="/gamepage" component={GamePage} />
        <Route path="/settingspage" component={SettingsPage} />
        <Route path="/gameoverpage" component={GameOverPage} />   
      </div>
    </BrowserRouter>
  )
}

export default App;
