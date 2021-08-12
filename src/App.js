import TaskList from "./TaskList";
import TopMenu from "./TopMenu";
import Menu1 from "./Menu 1";
import MenuII from "./Menu II";

function App() {
    // eslint-disable-next-line no-useless-concat
    const AppToMenu1and2 = ' '+'FirsLevel';

    const name = 'Counter Application';
    const version = 'v2.3.7'

    return (
        <div>
            <Menu1 fromApp={AppToMenu1and2}/>
            <MenuII fromApp={AppToMenu1and2}/>
            <TopMenu v={version}/>
          <TaskList siteName={name} veris={version}/>
        </div>

    );
}

export default App;