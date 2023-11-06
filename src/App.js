import "./App.css";
import Clock from "./components/clock/Clock";
import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
import HandleEvent from "./components/handleEvent/HandleEvent";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="App">
      <Clock />
      <hr />
      <HandleEvent />
      <hr />
      <Form />
      <hr />
      <Todo />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
