import React from "react";
import * as api from "../Api";
import NavBar from "./NavBar";

class StudentsByBlock extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    api.fetchStudentsByBlock(this.props.block).then(({ students }) => {
      this.setState({ students });
    });
  }
  render() {
    return (
      <main>
        <NavBar />
        <p>Total students in this block: {this.state.students.length}</p>

        <h2 className="blockStudent"> Students in the {this.props.block} block</h2>

        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
                Student Name: {student.name} <br />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default StudentsByBlock;
