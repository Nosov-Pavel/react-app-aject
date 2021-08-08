import React, {useState} from "react";

function App() {

    const [counter, setCounter] = useState(5);



    const buttonPlus = () => {
        setCounter(12)
}

    return(
        <div>
            {counter}
            <button onClick={buttonPlus}>+</button>
        </div>
    )
}

export default App;