import React, {useReducer} from 'react';

type Action = {
    type: string, payload:number
}
const reducerActions = (state:number, action:Action) => {
switch (action.type) {
    case 'add':
        state = state + action.payload;
        return state;
    case 'getBack':
        state = state - action.payload;
        return state;

    default:
        return state;
}
}
function App () {
   const [number, dispatch] = useReducer(reducerActions, 0)

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={()=>{
dispatch( {type:'add', payload:1});
            }}>increment</button>
            <button onClick={()=>{
                dispatch( {type:'getBack', payload:100});
            }}>decrement</button>
        </div>
    );
};

export default App;