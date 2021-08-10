function App() {

    const names = ['ALice', 'Bob', 'Jim', 'Zoe'];

    const list = []
    for (let i = 0; i < names.lenght; i++){
         list.push(<li>{names[i]}</li>)
    }



    return (
        <div>
            {names}
            <ul>
                {list}
            </ul>
        </div>

    );
}

export default App;