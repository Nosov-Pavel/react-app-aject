import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(5);

    const [newCounter, setNewCounter] = useState(4);

    const newButtonPlus = () => {
        setNewCounter(newCounter+1)
    }

    const buttonPlus = () => {
        setCounter(counter +1)
    }
    const buttonMinus = () => {
        setCounter(counter -1)
    }


    return (
        <div>
            {/*<button onClick={}>-</button>*/}
            {newCounter}
            <button onClick={newButtonPlus}>+</button>
            <br/>
            <button onClick={buttonMinus}>-</button>
            {counter}
            <button onClick={buttonPlus}>+</button>
        </div>
    )

}

    export default App;