import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../utils/library";
import { errorMessages } from "../utils/validation";
import {
  Button,
  ButtonContainer,
  checkError,
  Form,
  Input,
  InputContainer,
  Title,
  validInput,
} from "./LoginForm";

function CreateAccountForm({ users }) {
  const [errors, setErrors] = useState({
    email: true,
    password: true,
    worning: "",
  });
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 할일: createAccount 함수 완성
  const createAccount = ({ email, password }) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkError(errors)) return;

    const inputEmail = emailRef.current.value;
    const user = users.find((user) => user.email === inputEmail);
    if (!user)
      return setErrors((prevState) => ({
        ...prevState,
        worning: errorMessages["email"],
      }));

    const inputPassword = passwordRef.current.value;

    createAccount({ email: inputEmail, password: inputPassword });
    saveToken({ email: inputEmail });
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>계정 만들기</Title>
      <InputContainer>
        <div>
          <Input
            name="email"
            type={"text"}
            ref={emailRef}
            onChange={() => validInput(emailRef, setErrors)}
            error={errors.email}
          />
          <span>이메일 주소</span>
        </div>
        <div>
          <Input
            name="password"
            type={"password"}
            ref={passwordRef}
            onChange={() => validInput(passwordRef, setErrors)}
            error={errors.password}
          />
          <span>비밀번호</span>
        </div>
      </InputContainer>
      <ButtonContainer>
        <Button type={"submit"}>회원가입</Button>
      </ButtonContainer>
    </Form>
  );
}

export default CreateAccountForm;
