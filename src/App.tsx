import React from 'react';
import {MyContext} from "./MyContextProvider";

function App  () {
    return (
        <>

            <MyContext.Provider value={{}}>
                <A/>
                <B/>
            </MyContext.Provider>

        </>
    );
}

export default App;