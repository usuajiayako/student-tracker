import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Students from "./components/Students";
import Grads from "./components/Grads";
import StudentsByBlock from "./components/StudentsByBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Students path="/" />
        <Students path="/students" />
        <Grads path="/students/graduates" />
        <StudentsByBlock path="/students/:block" />
      </Router>
    </div>
  );
}

export default App;
