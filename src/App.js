import Form from "./components/Form";


function App() {

  const addTaskHandler = (e) =>{
    console.log(e);
  }

  return (
    <div className="App">
      <Form addTask={addTaskHandler}/>
    </div>
  );
}

export default App;
