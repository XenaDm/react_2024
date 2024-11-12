import React, {useEffect, useState} from 'react';
import Menu from "./Menu";


function App () {
let [number, setNumber] = useState<number>(0);
    useEffect(() => {
        console.log('App build')
    },);

return (
        <div>
            <Menu/>
            <h2>{number}</h2>
            <button onClick={()=>{
setNumber(++number);
            }}>increment</button>
        </div>
    );
}

export default App;
// кожного разу як відбувається рендерінг, меню також перебудовується разом з App, проте стан меню не змінюється, для зміни використовують memo