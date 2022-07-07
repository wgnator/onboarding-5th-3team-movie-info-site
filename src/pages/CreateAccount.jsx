import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../component/CreateAccountForm";
import { getToken } from "../utils/library";

function CreateAccount({ users }) {
  const navigate = useNavigate();

  const token = getToken();
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return <CreateAccountForm users={users} />;
}

export default CreateAccount;
