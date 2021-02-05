import axios from "axios";
export const fetchStudentIdByName = (nameInput) => {
  return axios
    .get(
      "https://nc-student-tracker.herokuapp.com/api/students?graduated=false"
    )
    .then((studentsArray) => {
      const studentObj = studentsArray.find(
        (student) => student.name === nameInput
      );
      return studentObj._id;
    });
};
