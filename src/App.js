import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(5);

    const buttonPlus = () => {
        setCounter(counter +1)
    }


    return (
        <div>
            {counter}
            <button onClick={buttonPlus}>+</button>
        </div>
    )

}

    export default App;