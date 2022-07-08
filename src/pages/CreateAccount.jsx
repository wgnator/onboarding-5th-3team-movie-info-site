import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../component/CreateAccountForm";
import { getLoggedInUser } from "../utils/library";

function CreateAccount() {
  const navigate = useNavigate();

  const token = getLoggedInUser();
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return <CreateAccountForm />;
}

export default CreateAccount;
