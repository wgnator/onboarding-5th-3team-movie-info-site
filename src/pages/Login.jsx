import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import { getLoggedInUser } from "../utils/library";

function Login() {
  const navigate = useNavigate();

  const token = getLoggedInUser();
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return <LoginForm />;
}

export default Login;
