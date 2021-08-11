function App() {

    const address = [
        {
            id: '1.1',
            title: 'name - Alice',
            state : 'Fl',
            city : 'Miami',
            street : 'Coral Dr. Avenue',

        } ,
        {
            id: '2.1',
            title: 'name - Bob',
            state : 'NY',
            city : 'New York',
            street : 'Manhattan',
        },
        {
            id: '3.1',
            title: 'name - Zoe',
            state : 'ND',
            city : 'New Jersey',
            street : 'Coral Dr. Avenue 17',
        },
        {
            id: '4.1',
            title: 'name - Jim',
            state : 'AT',
            city : 'Atlanta',
            street : 'Coral Dr. Aveny 21',
        }
    ];

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
                {address.map(el => <li key={el.id}> {el.title} <br/>
                    {el.state} <br/>{el.city} <br/>{el.street}</li>)}
            </ul>
            <hr/>
            <ul>
                {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
            </ul>
        </div>

    );
}

export default App;