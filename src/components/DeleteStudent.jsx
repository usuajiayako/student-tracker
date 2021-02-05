import React from "react";
import * as api from "../Api";

class DeleteStudent extends React.Component {
  state = { id: "" };

  handleInput = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api.deleteStudent({ ...this.state }).then((res) => {
      console.log(res);
    });
    this.setState({ id: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Id of student you wish to delete:
          <input
            type="text"
            onChange={this.handleInput}
            id="id"
            value={this.state.id}
          />
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Delete student
        </button>
      </form>
    );
  }
}

export default DeleteStudent;
