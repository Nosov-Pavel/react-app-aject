import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(5);

    // const buttonPlus => () => {
    //     setCounter(co)
    // }


    return (
        <div>
            {counter}
        </div>
    )

}

    export default App;