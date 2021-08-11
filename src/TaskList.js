import TopMenu from "./TopMenu";

function TaskList(props){
    console.log(props)
    return(
        <ul>
            <li>{props.siteName}</li>
            <li>{props.veris}</li>
            <li>Task 3</li>

            <TopMenu version={props.veris} />
        </ul>
    )
}
export default TaskList;