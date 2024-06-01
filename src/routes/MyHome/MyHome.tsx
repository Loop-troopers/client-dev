import * as S from "./styles/MyHome.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const bgImgSrc = "/images/main_home_bg.png";

const menus = ["회원정보 수정", "로그아웃", "회원 탈퇴"];

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
      ?.catch((e) => {});
  };

  return (
    <S.Container>
      <S.HomeImageWrapper>
        <S.HomeBgImage src={bgImgSrc} />
      </S.HomeImageWrapper>
      <S.HomeMenuWrapper>
        {menus.map((menuItem) => (
          <S.HomeMenu onClick={() => logout()}>{menuItem}</S.HomeMenu>
        ))}
      </S.HomeMenuWrapper>
    </S.Container>
  );
}
