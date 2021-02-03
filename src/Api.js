export const fetchStudents = () => {
  return fetch(
    "https://nc-student-tracker.herokuapp.com/api/students?graduated=false"
  ).then((students) => students.json());
};

export const fetchGraduates = () => {
  return fetch(
    "https://nc-student-tracker.herokuapp.com/api/students?graduated=true"
  ).then((students) => students.json());
};

export const fetchStudentsByBlock = (block) => {
  return fetch(
    `https://nc-student-tracker.herokuapp.com/api/students?graduated=false&block=${block}`
  ).then((students) => students.json());
};
