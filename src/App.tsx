import React from 'react';
import {defaultStoreValue, MyContext} from "./MyContextProvider";

function App  () {
    return (
        <>

            <MyContext.Provider value={defaultStoreValue}>

            </MyContext.Provider>

        </>
    );
}

export default App;