import async from "asyncawait/async";

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

export const postStudent = (url = '', data = {}) => {
  // Default options are marked with *
  const response = fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });