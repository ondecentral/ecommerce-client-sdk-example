import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lucia from "lucia-sdk";
import { Footer, Navbar } from "../components";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    lucia.pageView("Register");
  }, []);

  const handleSubmit = (event) => {
    if (email !== "") {
      lucia.userInfo(email, {"email": email, "name": name})
    }
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };


  return (<>
    <Navbar/>
    <div className="container my-3 py-3">
      <h1 className="text-center">Register</h1>
      <hr/>
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form>
            <div className="form my-3">
              <label htmlFor="Name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Enter Your Name"
                onChange={handleChangeName}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="name@example.com"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form  my-3">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>
            <div className="my-3">
              <p>
                Already has an account?
                <Link to="/login" className="text-decoration-underline text-info">
                  Login
                </Link>
              </p>
            </div>
            <div className="text-center">
              <Link to="/">
                <button onClick={handleSubmit} className="my-2 mx-auto btn btn-dark" type="submit">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}

export default Register
