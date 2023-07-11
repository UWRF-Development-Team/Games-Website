
import Layout from './components/Layout.js';
import TitleAndButton  from "./components/TitleAndButton.js";
import Turn from "./components/Turn.js";
import Board from "./components/Board.js";
import {Style} from "./components/styles/Style.js";

function App() {
  return (
    <div style={Style.WebPage}>
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
