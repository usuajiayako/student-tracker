import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";

class StudentsByBlock extends React.Component {
  state = {};

  componentDidMount() {
    api.fetchStudentsByBlock(this.props.block).then(({ students }) => {
      this.setState({ students });
    });
  }
  render() {
    return (
      <main>
        <Link to="/">
          <button>Home</button>
        </Link>
        <h2> Students in the {this.props.block} block</h2>

        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
                Graduate Name: {student.name} <br />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default StudentsByBlock;
