
import React from 'react';

const BotCollection = ({ bots, addToBotArmy }) => {
  return (
    <div>
      <h1>Bot Collection</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
            <button onClick={() => addToBotArmy(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
