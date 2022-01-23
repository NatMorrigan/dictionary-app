
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="Footer d-flex justify-content-center"> Coded by <a className="GitLink text-decoration-none" href="https://github.com/NatMorrigan/dictionary-app" target="_blank"> Natalia Hertsovska</a>
       </footer>
    </div>
  );
}

export default App;
