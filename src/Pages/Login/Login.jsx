import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";



const Login = () => {

const [disabled, setDisabled] = useState(true);
const { signIn } = useContext(AuthContext);

const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";
console.log("state in the location login page", location.state);



  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);


//   login -----------------
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login SuccessFull",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from, { replace: true });
    })
  };


  const handleValidateCaptcha = (e) => {
    // const user_captcha_value = captchaRef.current.value
   
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 pt-24">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <img src={loginImg} alt="" className="w-md" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                    onBlur={handleValidateCaptcha}
                  
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                {/* <button  className="btn btn-xs w-80 mt-2">
                  validate
                </button> */}
              </div>

              {/* submit button  */}
              <div className="form-control mt-6">
                {/* TODO: apply disabled for re captcha */}
                <input
                    disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="pl-6">
              <small>
                New Here?{" "}
                <Link to="/signup" className="text-orange-400">
                  Create an account
                </Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
