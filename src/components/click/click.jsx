import React, { useState } from 'react';
import './click.css'


const Click = () => {

 // Declare a new state variable, which we'll call "count"
 const [Bonk,setBonk] = useState(0);
 const toggleBonk = () => {
  if (Bonk === 0)
      {setBonk(1);
      setTimeout(() => {setBonk(0);}, 500);
      }
}
  return(
    <div className="flex-basis: 60% hover:basis-1/2">
      <p>Bonked state : {Bonk}</p>
      <button onClick={toggleBonk} className="bg-stone-100">Click to bonk</button>
    </div>
  );
}

export default Click