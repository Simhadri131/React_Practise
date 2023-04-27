import logo from "./logo.svg";
import "./App.css";
import DataFromSite from "./components/DataFromSite";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white text-2xl font-serif font-bold">
          This is sample react project Tailwind css
        </h1>
        <p className="text-white text-xl font-serif font-bold">
          Click The Button To Get Random Jokes from Different categories
        </p>
        <DataFromSite />
      </header>
    </div>
  );
}

export default App;
