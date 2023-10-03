import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { signUser, GoogleSign, GithubSign } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    GoogleSign()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    GithubSign()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />{" "}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-5">
                  <button className="btn btn-primary">Login </button>
                </div>
              </form>
              <div>
                <button
                  onClick={handleGoogle}
                  className="btn btn-secondary mr-4"
                >
                  Google{" "}
                </button>
                <button onClick={handleGithub} className="btn btn-secondary"> Github </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
