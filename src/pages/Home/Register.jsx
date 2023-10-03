import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  
  const {createUser}  = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
  
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const name = form.get('name');
    const photo = form.get('photo');
    const password = form.get('password');

    console.log(email,password,photo,name);

    createUser(email,password)
    .then(result => console.log(result.user))
    .catch(error => console.log(error))

  }

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Register</h2>

      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="text-lg text-center my-4">
        <p>Already have an account? <Link className="text-blue-500 font-semibold" to="/login">Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;