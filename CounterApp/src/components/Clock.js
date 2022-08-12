import React from "react";

import { useEffect, useState } from "react";



function Clock () {
    
const [ClockState, setClockState] = useState();

useEffect( () => {
    setInterval( () => {
        const time = new Date();

        setClockState( time.toLocaleTimeString() )
    }, 1000 );
} );
 

const date = new Date().toDateString()


    
    
    
    
    
    return (
        <div className="text-warning font-monospace fs-3">

            {ClockState} {date}          

        </div>
    )
};


export default Clock; 

