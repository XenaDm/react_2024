import React, {useRef} from 'react';
import UseRefComponentDemo2 from "./UseRefComponentDemo2";

const App = () => {

    const customRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            {/*<input ref={customRef} type="text"/>*/}
            {/*<button onClick={()=>{*/}
            {/*    console.log(customRef.current)*/}
            {/*}}>click me</button>*/}

            <UseRefComponentDemo2/>
        </div>
    );
};

export default App;