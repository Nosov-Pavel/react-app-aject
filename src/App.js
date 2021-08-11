import TaskList from "./TaskList";
import TopMenu from "./TopMenu";

function App() {

    const name = 'Counter Application';
    const version = 'v2.3.7'

    return (
        <div>
            <TopMenu/>
          <TaskList siteName={name}/>
        </div>

    );
}

export default App;