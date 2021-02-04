import React from "react";
import * as api from "../Api";
import { Link } from "@reach/router";

class Grads extends React.Component {
  state = {
    students: [],
  };
  componentDidMount() {
    api.fetchGraduates().then(({ students }) => {
      this.setState({ students });
    });
  }
  render() {
    return (
      <main>
        <nav className="nav-bar"></nav>
        <Link to="/">
          <p>Current Students</p>
        </Link>

        <h2> Graduates </h2>

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

export default Grads;
