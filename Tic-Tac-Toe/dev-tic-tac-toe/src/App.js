import logo from './logo.svg';
import Layout from './components/Component';
import './App.css';
import Component from './Component.js'
import NavBar from "./NavBar";
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Component/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Below is theoliverlear React sandbox</h2>
        <TestGrounds/>
    </div>
  );
}
*/
function App() {
  return (
    <div>
      <Layout/>
      <h1>Below is @theoliverlear React sandbox</h1>

    </div>
  );
}
export default App;
