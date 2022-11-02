import React from 'react';
import Dennis from '/home/phatpham/Documents/Codes/Javascript/phat_app/src/assets/images/dennis.jpg'
import './image.css'
const Image = () => {
    return(
        <div>
        <img src={Dennis} style={{ width: '600px',height:'600px'}}/>
        {/* <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '600px', height:'400px' }} href="www.google.com" class="center"/>? */}
    </div>
    )
}

export default Image