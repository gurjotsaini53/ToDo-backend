import "./App.css";
import ToDo from "./components/ToDo";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo</h1>

        <div className="top">
          <input type="text" name="" id=" " placeholder="Add ToDos..." />

          <div className="add">Add</div>
        </div>

        <div className="list">
          <ToDo text="hi" />
          <ToDo text="hi" />
          <ToDo text="hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
