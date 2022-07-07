import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import { getToken } from "../utils/library";

function Login({ users }) {
  const navigate = useNavigate();

  const token = getToken();
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return <LoginForm users={users} />;
}

export default Login;
