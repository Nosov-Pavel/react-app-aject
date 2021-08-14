import './App.css';
function App(){

    const storeName = 'I am Who I am';
    const city = 'FL';
    const house = '1616';
    const street = '7Avenu';
    const zipCode = '32903';
    const phoneNumber = '+1321116108';



    
    return(
        <div className = "App">
            <h1>{storeName}</h1>

            <p>Address: {city} - {house} - {street} - {zipCode} -</p>
            <p>Phone: {phoneNumber}</p>

            <p>Natural linen Hoodie <br/>50% discount</p>

        </div>
    );
}
export default App;