import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { setTitle } from "./store";

function App(props) {
  const func = () => {
    props.setTitle("Hello Melis");
  };
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <button onClick={func}>Button</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, { setTitle })(App);
