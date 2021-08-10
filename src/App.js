function App() {

    const names = ['ALice', 'Bob', 'Jim'];



    return (
        <div>
            {names}
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
            </ul>
        </div>

    );
}

export default App;