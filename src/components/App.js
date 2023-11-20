import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BotCollection from './BotCollection'; 
import YourBotArmy from './YourBotArmy'; 
const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    
    fetch('')
      .then((response) => response.json())
      .then((data) => setBots(data.bots))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const addToBotArmy = (bot) => {
    if (!yourBotArmy.includes(bot)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const removeFromBotArmy = (bot) => {
    const updatedArmy = yourBotArmy.filter((b) => b !== bot);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = (bot) => {
    const updatedBots = bots.filter((b) => b !== bot);
    setBots(updatedBots);

    removeFromBotArmy(bot); 
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
             <Link to="/">Bot Collection</Link> 
            </li>
            <li>
              <Link to="/your-bot-army">Your Bot Army</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BotCollection bots={bots} addToBotArmy={addToBotArmy} />} />
          <Route
            path="/your-bot-army"
            element={<YourBotArmy yourBotArmy={yourBotArmy} removeFromBotArmy={removeFromBotArmy} dischargeBot={dischargeBot} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
