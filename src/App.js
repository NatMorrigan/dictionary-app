
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary defaultKeyword ="Hello" />
      </main>
       <footer className="text-center" >
This project was created by Natalia Hertsovska and is {" "} 
<a className="text-decoration-none" href="https://github.com/NatMorrigan/dictionary-app" target="_blank" rel="noreferrer">
open-sourced on GitHub
</a> 
   </footer>
    </div>
  );
}

export default App;
