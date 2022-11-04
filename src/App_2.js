import React, {useState} from 'react';
import './App.css'

const App2 = () =>{

    const [Bonk,setBonk] = useState(0);
    // setTimeout(() => {  console.log("World!"); }, 5000);
    const toggleBonk = () => {
        if (Bonk === 0)
            {setBonk(1);
            setTimeout(() => {setBonk(0);}, 200);
            }
    }
    
        return(
        <div>
            <button onClick={toggleBonk} className="bg-stone-100">Click to bonk</button>
            <p>{Bonk}</p>
        </div>
    );
}
export default App2