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

export const addStudent = (data) => {
  return fetch("https://nc-student-tracker.herokuapp.com/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const deleteStudent = ({ id }) => {
  return (
    fetch(`https://nc-student-tracker.herokuapp.com/api/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(id),
    })
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Success:", data);
      // })
      .catch((error) => {
        console.error("Error:", error);
      })
  );
};
