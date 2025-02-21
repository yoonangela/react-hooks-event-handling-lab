// Code Keypad Component Here
import React from "react";

function Keypad (){
    function change(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={change} />
        </div>
    )
}

export default Keypad;