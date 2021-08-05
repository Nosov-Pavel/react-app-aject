import Today from "./Today";

function App(){
    const name = 'Alice';

    const hello = name => `Hello ${name}`;



    return(
        <div>
            {Today}
            {hello(name)}
            {hello('Bob')}
        </div>
    )
}

export default App;