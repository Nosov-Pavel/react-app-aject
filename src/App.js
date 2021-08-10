function App() {

    const names = ['ALice', 'Bob', 'Jim', 'Zoe'];


    return (
        <div>
            {names}
            <ul>
                {names.map(el =><li>{el}</li>)}
            </ul>
        </div>

    );
}

export default App;