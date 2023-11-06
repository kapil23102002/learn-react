import "./App.css";
import Clock from "./components/clock/Clock";
import Form from "./components/form/Form";
import HandleEvent from "./components/handleEvent/HandleEvent";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr />
      <HandleEvent />
      <hr />
      <Form />
    </div>
  );
}

export default App;
