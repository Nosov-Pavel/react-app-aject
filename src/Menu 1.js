import Menu11 from "./Menu 1.1";

function Menu1(props){

    const fromMenu1 = 'secondLevel1';
    return(
        <div>
            Names{props.fromApp}
            <Menu11 fromM1={fromMenu1}/>
        </div>

    )
}
export default Menu1;