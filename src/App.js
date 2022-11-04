import React from 'react';
import Hello from './components/hello/hello.jsx'
import Click from './components/click/click.jsx'
import Image from './components/images/image.jsx'

const App = ()=>{
    return(
        <div class="bg-hero bg-no-repeat bg-center bg-fixed">
            <div className="p-6 max-w-sm mx-auto rounded-xl bg-white shadow-lg space-x-3 border-2 border-zinc-300	">
                <Hello/>
                <Click/>
                {/* <p>Bonked state : {Bonk}</p> */}
                <Image/>
            </div>
        </div>
        );
};

export default App

