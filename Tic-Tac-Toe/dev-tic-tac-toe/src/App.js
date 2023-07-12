
import Layout from './components/Layout.js';
import TitleAndButton  from "./components/TitleAndButton.js";
import Turn from "./components/Turn.js";
import Board from "./components/Board.js";
import {Style} from "./components/styles/Style.js";

function App() {
  return (
    <div>

        <div>
            <Layout/>
        </div>
        <div style={Style.WebPage.Body}>
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

    </div>
  );
}
export default App;
