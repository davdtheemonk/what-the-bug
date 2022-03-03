import logo from './logo.svg';
import { Helmet } from 'react-helmet'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Helmet>
          <title>"what-the-bug"</title>
        </Helmet>
        <img src="/icon-dev.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
