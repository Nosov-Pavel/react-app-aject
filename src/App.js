function App() {

    const names = ['ALice', 'Bob', 'Jim', 'Zoe'];

    const list = [
        <li>{names[0]}</li>,
        <li>{names[1]}</li>,
        <li>{names[2]}</li>

    ]



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