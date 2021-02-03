import './App.css';
import Header from "./components/Header";
import { Router } from "@reach/router";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Students path="/"/>
        <Students path="/students"/>
        {/* <Grads></Grads> */}
      </Router>
    </div>
  );
}

export default App;
