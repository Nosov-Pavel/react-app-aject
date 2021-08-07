
import React, {}
import {useState} from "react";

useState from "react";
function App(){
    const [counter, setCounter] = useState(3);

    let number = 5;

    const buttonPlus = () => {
        console.log('Click!')

        number--;
        console.log('newNumber', number);

    }

    return(
        <div>
            {number}
            <button onClick={buttonPlus}>+</button>

        </div>
    )
}

export default App;