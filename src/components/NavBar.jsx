import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <p>Current Students</p>
      </Link>
      <Link to="/students/graduates">
        <p>Graduates</p>
      </Link>
      <Link to="/students/addstudent">
        <p>Add a new student</p>
      </Link>
      <Link to="/students/deletestudent">
        <p>Delete a student</p>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">See students by block</button>
        <div className="dropdown-content">
          <Link to="/students/proj">Project</Link>
          <Link to="/students/fun">Fundamentals</Link>
          <Link to="/students/fe">Frontend</Link>
          <Link to="/students/be">Backend</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
