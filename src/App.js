import TaskList from "./TaskList";
import TopMenu from "./TopMenu";

function App() {

    const name = 'Counter Application';
    const version = 'v2.3.7'

    return (
        <div>
            <TopMenu v={version}/>
          <TaskList siteName={name} veris={version}/>
        </div>

    );
}

export default App;