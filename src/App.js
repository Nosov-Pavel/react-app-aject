
import React from "react";
function App(){
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