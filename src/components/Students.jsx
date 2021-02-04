import { Link } from "@reach/router";
import * as api from "../Api";
import React from "react";

class Students extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    api.fetchStudents().then(({ students }) => {
      this.setState({ students });
    });
  }
  render() {
    return (
      <main>
        <nav class="navBar">
          <Link to="/students/graduates">
            <p>Graduates</p>
          </Link>
          <div class="dropdown">
            <button class="dropbtn">See students by block</button>
            <div class="dropdown-content">
              <Link to="/students/proj">Project</Link>
              <Link to="/students/fun">Fundamental</Link>
              <Link to="/students/fe">Frontend</Link>
              <Link to="/students/be">Backend</Link>
            </div>
          </div>
        </nav>
        <h2 class="header"> Current Students </h2>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li className="studentCard" key={student._id}>
                Student Name: {student.name} <br />
                Current Block:
                {student.currentBlock}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Students;
