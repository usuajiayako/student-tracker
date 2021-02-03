export const fetchStudents = () => {
  return fetch("https://nc-student-tracker.herokuapp.com/api/students").then((students) => students.json())
}