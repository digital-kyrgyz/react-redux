import logo from './logo.svg';
import './App.css';

function App() {
  const func = () =>{
    console.log("Hello Melis");
  }
  return (
    <div className="App">
        <h1>Title</h1>
        <button onClick={func}>Button</button>
      </div>
  );
}

export default App;
