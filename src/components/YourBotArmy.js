
import React from 'react';

const YourBotArmy = ({ yourBotArmy, removeFromBotArmy, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {yourBotArmy.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
            <button onClick={() => removeFromBotArmy(bot)}>Release from Army</button>
            <button onClick={() => dischargeBot(bot)}>Discharge Forever</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
