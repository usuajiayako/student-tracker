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
        <h2> Current Students </h2>
        <Link to="/students/graduates">
          <button>Toggle Graduates</button>
        </Link>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
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
