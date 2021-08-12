import TopMenu from "./TopMenu";

function TaskList(props){

    return(
        <ul>
            <li>{props.siteName}</li>
            <li>{props.version}</li>
            <li>Task3</li>

            <TopMenu version={props.version}/>
        </ul>

    )
}
export default TaskList;