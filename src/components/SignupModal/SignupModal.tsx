import { useState, useRef, LegacyRef, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styles/SignupModal.style";

export default function SignupModal({ handleSignupModalOpen }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginIdInputRef = useRef<MutableRefObject<HTMLInputElement>>();
  const emailInputRef = useRef<MutableRefObject<HTMLInputElement>>();
  const passwordInputRef = useRef<MutableRefObject<HTMLInputElement>>();

  const handleUsernameInputChange = () => {
    setUsername(loginIdInputRef.current.value);
  };
  const handleEmailInputChange = () => {
    setEmail(emailInputRef.current.value);
  };
  const handlePasswordInputChange = () => {
    setPassword(passwordInputRef.current.value);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      return alert("이름을 입력하세요");
    }
    if (!email) {
      return alert("이메일을 입력하세요");
    }
    if (!password) {
      return alert("비밀번호를 입력하세요");
    }

    const signupBodyData = {
      username,
      email,
      password,
    };

    // POST: 사용자 회원가입 정보 입력
    const signupPostURL = `/api/register`;
    axios
      ?.post(signupPostURL, signupBodyData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      ?.then((res) => {
        console.log(res);

        if (res.status === 201) {
          navigate("");
          handleSignupModalOpen(false);
        }
      })
      ?.catch(() => {
        alert("회원가입 실패");
        setIsLoading(false);
      });
    setIsLoading(true);
  };

  return (
    // <form action="" onSubmit={handleSignupSubmit}>
    <S.FormWrapper
      action=""
      onSubmit={handleSignupSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <S.FormContent>
        <S.Header>
          <S.Title>회원가입</S.Title>
        </S.Header>
        <S.InputContainer>
          <S.Label>사용자 이름</S.Label>
          <S.Input
            onChange={handleUsernameInputChange}
            type="text"
            value={username}
            placeholder="Enter your username"
            required
            ref={loginIdInputRef}
          />
          <S.Label>이메일</S.Label>
          <S.Input
            onChange={handleEmailInputChange}
            type="text"
            value={email}
            placeholder="Enter your email"
            required
            ref={emailInputRef}
          />
          <S.Label>비밀번호</S.Label>
          <S.Input
            onChange={handlePasswordInputChange}
            type="password"
            value={password}
            placeholder="Enter your Password"
            required
            ref={passwordInputRef}
          />
          <S.SubmitButton disabled={isLoading}>완료</S.SubmitButton>
        </S.InputContainer>
      </S.FormContent>
    </S.FormWrapper>
    // </form>
  );
}
