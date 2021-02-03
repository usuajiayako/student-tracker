import React from "react";

class Addstudent extends React.Component {
  state = { 
    newStudent : {
      "_id": "",
      "name": "",
      "startingCohort": 0,
      "currentBlock": ""
    }
   }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  handleInput = ({target: {value, id}}) => {
    this.setState((currentState) => {
      return { [id]: value };
    }, () => {console.log(this.state)});
  };

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Student ID:
        <input type="text" onChange={this.handleInput} id="_id"/>
        </label>
        <label>Name:
        <input type="text" onChange={this.handleInput} id="name"/>
        </label>
        <label>Starting Cohort:
        <input type="text" onChange={this.handleInput} id="startingCohort"/>
        </label>
        <label>Current Block:
        <input type="text" onChange={this.handleInput} id="currentBlock"/>
        </label>
        <button type="submit" onClick={this.handleSubmit}>Comfirm student detail</button>
      </form>
      );
  }
}
 
export default Addstudent;