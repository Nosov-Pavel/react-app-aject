
import React, {useState} from "react";

useState from "react";

function App(){
    const [counter, setCounter] = useState(3);



    let number = 3;

    const buttonPlus = () => {
        setCounter( counter + 1);
        console.log('Click!')

        number--;
        console.log('newNumber', number);

    }

    return(
        <div>
            {counter}
            <button onClick={buttonPlus}>+</button>

        </div>
    )
}

export default App;