import React from "react";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { increase, decrease, reset, byInput } from "../redux/counter/counterSlice";

import 'bootstrap/dist/css/bootstrap.min.css';

function Counter () {
   const countValue = useSelector((element) => element.counter.value  )

    const dispatch = useDispatch();
   
   const [amount, setAmount] = useState();
   



   
   
    return (
      
    <div className="container font-monospace">
      
      <div className=" row text-center justify-content-center">

        <h1 className='shadow-lg p-3 mb-5 bg-warning rounded mt-3 border border-3 border-dark'>
        
        The Counter
        
        </h1>
           
        <div className="row text-center justify-content-center fs-1 text-dark">
           
            {countValue} 
        
        </div> <br/>

        <div className="row col-sm-12 justify-content-center align-content-center">
            
            <button className="rounded-4 col-sm-1 btn btn-warning border border-3 border-dark" onClick={ () => dispatch( increase() ) }> 
            
            İncrease 
            
            </button>

            <button className="rounded-4 col-sm-1 ms-2 btn btn-warning border border-3 border-dark" onClick={ () => dispatch( decrease() )  }>    
            
            Decrease    
            
            </button>

            <button className="rounded-4 col-sm-1 ms-2 btn btn-warning border border-3 border-dark" onClick={ () => dispatch( reset() ) }>    
            
            Reset   
            
            </button>
        
        </div>
           
            <br/>  <br/>

           
        <div className="row col-sm-6 justify-content-center">
           

           <p className="mt-5 shadow-lg p-3 mb-5 bg-warning rounded mt-3 border border-3 border-dark">
            
            Choose your number and increase through with below button!
            
            </p> 

            <input type="number" className="rounded-4 col-sm-2" value={amount} onChange={ ( event ) => setAmount( event.target.value ) } /> <br/>

            <br/>

            <button className="ms-2 rounded-4 col-sm-2 btn btn-warning border border-3 border-dark" onClick={ () => dispatch( byInput(amount) ) }>
                İncrease
            </button>
        
        </div>   

            
            
        </div>

    </div>
    )
};

export default Counter;