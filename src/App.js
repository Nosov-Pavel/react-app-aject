import './App.css';
function App(){

    const storeName = 'I am Who I am';
    const city = 'FL';
    const house = '1616';
    const street = '7Avenu';
    const zipCode = '32903';
    const phoneNumber = '+1321116108';
    const brand = 'I Am Who I Am'



    
    return(
        <div className = "App">
            <h1>{storeName}</h1>
            <hr/>

            <p>Address: {city} - {house} - {street} - {zipCode} -</p>
            <p>Phone: {phoneNumber}</p>

            <p>Clothes made from natural linen <br/>50% discount</p>
            <hr/>
            <h2>{brand}</h2>

        </div>
    );
}
export default App;