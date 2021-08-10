function App() {

    const names = ['ALice', 'Bob', 'Jim', 'Zoe'];

    const list = names.map(el =><li>{el}</li>)



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