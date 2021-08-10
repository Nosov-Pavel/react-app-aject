import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(5);

    const buttonPlus = () => {
        setCounter(counter +1)
    }
    const buttonMinus = () => {
        setCounter(counter -1)
    }


    return (
        <div>
            <button onClick={buttonMinus}>-</button>
            {counter}
            <button onClick={buttonPlus}>+</button>
        </div>
    )

}

    export default App;