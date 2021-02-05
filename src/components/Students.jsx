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
        <nav className="navBar">
          <Link to="/students/addstudent">Add a new student</Link>
          <Link to="/students/graduates">
            <p>Graduates</p>
          </Link>
          <div className="dropdown">
            <button className="dropbtn">See students by block</button>
            <div className="dropdown-content">
              <Link to="/students/proj">Project</Link>
              <Link to="/students/fun">Fundamentals</Link>
              <Link to="/students/fe">Frontend</Link>
              <Link to="/students/be">Backend</Link>
            </div>
          </div>
        </nav>
        <h2 className="header"> Current Students </h2>
        <p>Total students: {this.state.students.length}</p>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li className="studentCard" key={student._id}>
                Student Name: {student.name}
                <br />
                Current Block:
                {student.currentBlock}
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Students;
