import TaskList from "./TaskList";
import TopMenu from "./TopMenu";

function App(){
    const name = 'Counter Application';
    const version = 'v1.2.3'

    
    return(
        <div>
            <TopMenu v={version}/>
            <TaskList siteName={name} version={version}/>

        </div>
    );
}
export default App;