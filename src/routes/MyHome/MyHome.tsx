import styled from "styled-components";
import * as S from "./styles/MyHome.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export default function MyHome() {
  const navigate = useNavigate();

  const logout = () => {
    // GET: 사용자 로그아웃
    const logoutURL = `api/logout`;
    axios
      .get(logoutURL)
      ?.then((res) => {
        console.log(res);

        if (res.status === 200) {
          // userDispatch(logoutUser(res.data));
          navigate("/");
        }
      })
      ?.catch((e) => {
        alert("로그인 실패");
      });
  };

  return (
    <S.Wrapper>
      <button onClick={() => logout()}>로그아웃</button>
    </S.Wrapper>
  );
}
