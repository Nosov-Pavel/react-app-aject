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
        },
        {
            id: '3',
            title: 'Zoe',
            phone: '777-333-77-73'
        },
        {
            id: '4',
            title: 'Jim',
            phone: '777-333-37-33'
        }];


    return (
        <div>
            <ul>
                {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
            </ul>
        </div>

    );
}

export default App;