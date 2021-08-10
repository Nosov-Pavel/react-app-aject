function App() {

    const names = [
        {
            id: '1',
            title: 'ALice',
            phone: '777-333-77-33'
        },
        {
            id: '2',
            title: 'Bob',
            phone: '777-333-77-37'

        }, 'Jim', 'Zoe'];


    return (
        <div>
            {names}
            <ul>
                {names.map(el => <li key={el}>{el}</li>)}
            </ul>
        </div>

    );
}

export default App;