import React, {useState} from "react";
function App() {
    const [counter, setCounter] = useState(10);
    const buttonPlus = () => {
        setCounter (counter + 1);
    }
    return(
        <div>

        </div>
    )
}