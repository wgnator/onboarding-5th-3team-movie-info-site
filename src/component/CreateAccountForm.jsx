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
  InputBox,
  InputContainer,
  Title,
  validInput,
  Worning,
} from "./LoginForm";

const createUser = ({ id, email, password }) => ({
  id,
  email,
  password,
  watched: [],
  likes: [],
  favorites: [],
});
const createUserId = (users) => users.sort((a, b) => b.id - a.id)[0].id + 1;

const createAccount = ({ id, email, password }) => {
  const user = createUser({ id, email, password });

  fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("성공:", data);
    })
    .catch((error) => {
      console.error("실패:", error);
    });
};

function CreateAccountForm({ users }) {
  const [errors, setErrors] = useState({
    email: true,
    password: true,
    worning: "",
  });
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkError(errors)) return;

    const inputEmail = emailRef.current.value;
    const user = users.find((user) => user.email === inputEmail);
    // 할일: 가입된 email이 존재하는지 검증하는 건 fetch쪽으로 분리
    if (user)
      return setErrors((prevState) => ({
        ...prevState,
        worning: errorMessages.duplicateEmail,
      }));

    const inputPassword = passwordRef.current.value;

    createAccount({
      id: createUserId(users),
      email: inputEmail,
      password: inputPassword,
    });
    saveToken({ email: inputEmail });
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>계정 만들기</Title>
      <InputContainer>
        {errors.worning && <Worning>{errors.worning}</Worning>}
        <InputBox>
          <Input
            name="email"
            type={"text"}
            ref={emailRef}
            onChange={() => validInput(emailRef, setErrors)}
            error={errors.email}
          />
          <span>이메일 주소</span>
        </InputBox>
        <InputBox>
          <Input
            name="password"
            type={"password"}
            ref={passwordRef}
            onChange={() => validInput(passwordRef, setErrors)}
            error={errors.password}
          />
          <span>비밀번호</span>
        </InputBox>
      </InputContainer>
      <ButtonContainer>
        <Button type={"submit"}>회원가입</Button>
      </ButtonContainer>
    </Form>
  );
}

export default CreateAccountForm;
