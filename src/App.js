import TaskList from "./TaskList";
import TopMenu from "./TopMenu";
import Menu1 from "./Menu 1";

function App() {
    const AppToMenu1and2 = 'FirsLevel';

    const name = 'Counter Application';
    const version = 'v2.3.7'

    return (
        <div>
            <Menu1 fromApp={AppToMenu1and2}/>
            <TopMenu v={version}/>
          <TaskList siteName={name} veris={version}/>
        </div>

    );
}

export default App;