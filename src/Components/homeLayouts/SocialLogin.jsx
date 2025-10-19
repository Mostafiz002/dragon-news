import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const SocialLogin = () => {
  const { googleSignIn, setUser, githubSignin, xSignin } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };

  const handleGithub = () => {
    githubSignin()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };

  const handleX = () => {
    xSignin()
      .then((result) => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleSignin}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <button
          onClick={handleGithub}
          className="btn bg-black text-white border-black w-full"
        >
          <IoLogoGithub size={24} /> Login with Github
        </button>
        <button
          onClick={handleX}
          className="btn bg-black text-white border-black w-full"
        >
          <svg
            aria-label="X logo"
            width="16"
            height="12"
            viewBox="0 0 300 271"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
          Login with X
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
