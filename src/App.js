import "./App.css";
import Clock from "./components/clock/Clock";
import HandleEvent from "./components/handleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr />
      <HandleEvent />
    </div>
  );
}

export default App;
