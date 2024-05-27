import { useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../reducer/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupModal from "../../components/SignupModal/SignupModal";
import * as S from "./styles/Login.style";

// 로그인 페이지
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const handleSignupModalOpen = (openStatus: boolean) => {
    setIsSignupOpen(openStatus);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const userDispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailInputChange = () => {
    setEmail(emailInputRef.current.value);
  };
  const handlePasswordInputChange = () => {
    setPassword(passwordInputRef.current.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      return alert("이메일을 입력하세요");
    }
    if (!password) {
      return alert("비밀번호를 입력하세요");
    }

    const body = {
      email,
      password,
    };

    // POST: 사용자 로그인 정보 입력
    const loginPostURL = `api/login/`;
    axios
      ?.post(loginPostURL, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      ?.then((res) => {
        if (res.status === 201) {
          // userDispatch(loginUser(res.data));
          navigate("");
        }
      })
      ?.catch((e) => {
        alert("로그인 실패");
        setIsLoading(false);
      });
    setIsLoading(true);
  };

  return (
    <>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.InnerContainer>
          <S.Header>
            <S.Title>Loop Troopers</S.Title>
          </S.Header>
          <S.FormWrapper>
            <S.Form onSubmit={handleLoginSubmit}>
              <S.Input
                onChange={handleEmailInputChange}
                type="text"
                value={email}
                placeholder="Email"
                ref={emailInputRef}
              />
              <S.Input
                onChange={handlePasswordInputChange}
                type="password"
                value={password}
                placeholder="Password"
                ref={passwordInputRef}
              />
              <S.LoginButton type="submit" disabled={isLoading}>
                로그인
              </S.LoginButton>
            </S.Form>
            <S.SignupHeader>아직 계정이 없으신가요?</S.SignupHeader>
            <S.SignupButton onClick={() => handleSignupModalOpen(true)}>
              회원가입하기 &rarr;
            </S.SignupButton>
          </S.FormWrapper>
        </S.InnerContainer>
      </S.Container>
      {isSignupOpen && (
        <S.Overlay onClick={() => handleSignupModalOpen(false)}>
          <SignupModal handleSignupModalOpen={handleSignupModalOpen} />
        </S.Overlay>
      )}
    </>
  );
}
