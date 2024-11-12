import React, {useEffect, useState} from 'react';
import './App.css'

function App() {
    let [number, setNumber] = useState<number>(0);

    useEffect(() => {
        console.log('send to server', number);
        return () =>{
            console.log('unconnect from server')
        }
    }, [number]);

    return (
        <div>
<h2>{number}</h2>
            <button onClick={() =>{
setNumber(prevState => prevState+1)//або
            }}>increment</button>
            <button onClick={() =>{
setNumber(prevState => {
    return --prevState;
})//або виразом
            }}>decrement</button>
        </div>
    );
};

export default App;