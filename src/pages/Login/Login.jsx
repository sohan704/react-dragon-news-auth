import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log('login location',location);

  const handleLogin = e => {
    e.preventDefault();
   
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
   signIn(email,password)
   .then(result => {
    console.log(result);
    navigate(location?.state ? location.state : '/');
   })
   .catch()

  }

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>

      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered" required />
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="text-lg text-center my-4">
        <p>Don`t have an account? <Link className="text-blue-500 font-semibold" to="/register">Register</Link> </p>
      </div>

    </div>
  );
};

export default Login;