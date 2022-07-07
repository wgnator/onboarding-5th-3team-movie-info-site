export const LOGIN_KEY = "wanted-pre-onboarding-fe";

const REGEX_ID =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const regex = {
  email: REGEX_ID,
  password: REGEX_PASSWORD,
};

export const errorMessages = {
  email: "정확한 이메일 주소를 입력하세요",
  password: "비밀번호는 숫자, 대문자, 특수 문자 포함 8자 이상입니다",
};

export const checkValidation = (name, value) => regex[name].test(value);

export const matchPassword = (dbPassword, inputPassword) =>
  dbPassword === inputPassword;
