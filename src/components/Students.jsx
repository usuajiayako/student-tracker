import {Link} from "@reach/router";
import * as api from "../Api";
import React from "react";

class Students extends React.Component {
  state = { 
    students: [],
   }
  
  componentDidMount() {
    console.log(api.fetchStudents)
    api.fetchStudents()
    .then(({students}) => {
      console.log(students)
      this.setState({students})
    })
  }
  render() { 
    return ( 
      <div></div>
     );
  }
}
 
export default Students;