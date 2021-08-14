import './App.css';
function App(){

    const storeName = 'I am Who I am';
    const city = 'FL';
    const house = '1616';
    const street = '7Avenu';
    const zipCode = '32903';
    const phoneNumber = '+1321116108';
    const brand = 'I Am Who I Am';
    const productName = 'jhgjhv';
    const productDescription = 'bljbkjb';
    const price = 99.99 ;
    const footerMenu = ['Contacts', 'About us', 'Delivery options', 'Facebook' ];



    
    return(
        <div className = "App">
            <h1>{storeName}</h1>
            <hr/>

            <p>Address: {city} - {house} - {street} - {zipCode} -</p>
            <p>Phone: {phoneNumber}</p>

            <p>Clothes made from natural linen <br/>50% discount</p>
            <hr/>
            <h2>{brand}</h2>

            <hr/>
            <p>product1: {productName}</p>
            <p>description1: {productDescription}</p>
            <p>price: ${price}</p>
            <button>-</button> 1 <button>+</button> {' '}<button>Buy</button>

            <hr/>
            <ul>
                <li>{footerMenu[0]}</li>
                <li>{footerMenu[1]}</li>
                <li>{footerMenu[2]}</li>
                <li>{footerMenu[3]}</li>
            </ul>



        </div>
    );
}
export default App;