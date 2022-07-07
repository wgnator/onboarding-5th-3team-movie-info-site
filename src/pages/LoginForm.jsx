import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { saveToken } from "../utils/library";
import { checkValidation, errorMessages } from "../utils/validation";

function LoginForm({ users }) {
  const [errors, setErrors] = useState({
    email: true,
    password: true,
    worning: "",
  });
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const checkError = () => Object.values(errors).find(Boolean);
  const checkPassword = (dbPassword, inputPassword) =>
    dbPassword === inputPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkError()) return;

    const inputEmail = emailRef.current.value;
    const user = users.find((user) => user.email === inputEmail);
    if (!user)
      return setErrors((prevState) => ({
        ...prevState,
        worning: errorMessages["email"],
      }));

    const inputPassword = passwordRef.current.value;
    if (!checkPassword(user.password, inputPassword))
      return setErrors((prevState) => ({
        ...prevState,
        worning: errorMessages["password"],
      }));

    saveToken({ email: inputEmail });
    navigate("/");
  };

  const validInput = (ref) => {
    const { name, value } = ref.current;
    if (!checkValidation(name, value)) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: errorMessages[name],
      }));
      return;
    }
    setErrors((prevState) => ({ ...prevState, [name]: false }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <InputContainer>
        <div>
          <Input
            name="email"
            type={"text"}
            ref={emailRef}
            onChange={() => validInput(emailRef)}
            error={errors.email}
          />
          <span>이메일 주소</span>
        </div>
        <div>
          <Input
            name="password"
            type={"password"}
            ref={passwordRef}
            onChange={() => validInput(passwordRef)}
            error={errors.password}
          />
          <span>비밀번호</span>
        </div>
      </InputContainer>
      <ButtonContainer>
        <Button type={"submit"}>로그인</Button>
        <div>
          <Link to={""} onClick={() => alert("구현 중")}>
            회원가입
          </Link>
        </div>
      </ButtonContainer>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 450px;
  padding: 60px 65px;
  background-color: black;
  border-radius: 4px;
`;
const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  div {
    display: flex;
    flex-direction: column;
    position: relative;

    span {
      color: gray;
      font-size: 12px;
      top: 6px;
      left: 20px;
      position: absolute;
    }
  }
`;
const Input = styled.input`
  border-radius: 6px;
  border: transparent;
  border-bottom: 4px solid white;
  font-size: 16px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6px;
  position: relative;
  border-bottom-color: ${(props) => (props.error ? "orange" : "white")};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  div {
    display: flex;
    justify-content: flex-end;
  }
  a {
    color: white;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  background-color: red;
  border-radius: 6px;
  border: transparent;
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: 600;
  color: white;
  width: 100%;
`;
