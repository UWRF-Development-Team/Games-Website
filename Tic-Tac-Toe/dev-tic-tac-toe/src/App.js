
import Layout from './components/Layout.js';
import TitleAndButton  from "./components/TitleAndButton.js";
import Turn from "./components/Turn.js";
import Board from "./components/Board.js";

function App() {
  return (
    <div>
        <div>
            <Layout/>
        </div>
    <div>
        <TitleAndButton/>
    </div>
    <div>
      <Turn/>
    </div>
    <div>
      <Board/>
    </div>
    </div>
  );
}
export default App;
