import { FaGoogle } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate("/");
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="px-8 py-4">
      <div className="divider"></div>
      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-info"
        >
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
