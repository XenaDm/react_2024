import React, {useCallback, useEffect, useState} from 'react';
import Menu from "./Menu";


function App () {
let [number, setNumber] = useState<number>(0);
    useEffect(() => {
        console.log('App build')
    },);

    const someFunction = useCallback(() => {
        console.log('asd');
    },[]);

return (
        <div>
            <Menu id={number} someFn={someFunction}/>
            <h2>{number}</h2>
            <button onClick={()=>{
setNumber(++number);
            }}>increment</button>
        </div>
    );
}

export default App;
// кожного разу як відбувається рендерінг, меню також перебудовується разом з App, проте стан меню не змінюється, для зміни використовують memo