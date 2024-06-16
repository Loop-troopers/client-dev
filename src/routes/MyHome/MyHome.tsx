import * as S from "./styles/MyHome.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HOME_MENU } from "../../constants/contstants";
import { useEffect, useState } from "react";
import { useLogout } from "../../hooks/logout";
import EditProfileModal from "../../components/ProfileEditModal/ProfileEditModal";
import ProfileBadge from "../../components/ProfileBadge/ProfileBadge";

const bgImgSrc = "/images/main_home_bg.png";

const menus: string[] = [
  HOME_MENU.editProfile,
  HOME_MENU.logout,
  HOME_MENU.withdrawal,
];

// 내 정보 페이지
export default function MyHome() {
  const navigate = useNavigate();
  const logout = useLogout();
  const [username, setUsername] = useState("");
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState(false);
  const handleProfileEditModalOpen = (openStatus: boolean) => {
    setIsProfileEditModalOpen(openStatus);
  };

  // DELETE: 회원 탈퇴
  const withdraw = () => {
    const withdrawURL = `api/withdraw`; // Fixed the URL to match the function
    axios
      .delete(withdrawURL)
      .then((res) => {
        if (res.status === 200) {
          alert("탈퇴되었습니다.");
          navigate("/");
        }
      })
      // @@@에러처리필요
      .catch(() => {});
  };

  // Set state: 사용자명
  useEffect(() => {
    const userInfoURL = `api/user_information`;
    (async () => {
      const response = await axios.get(userInfoURL);
      setUsername(response.data.username);
    })();
  }, []);

  // Click Handler: 메뉴 항목
  const handleClick = (menuItem: string) => {
    switch (menuItem) {
      case HOME_MENU.editProfile: {
        handleProfileEditModalOpen(true);
        break;
      }
      case HOME_MENU.logout:
        logout();
        break;
      case HOME_MENU.withdrawal:
        withdraw();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <S.Container>
        <S.HomeImageWrapper>
          <S.HomeBgImage src={bgImgSrc} />
          <ProfileBadge username={username} />
        </S.HomeImageWrapper>
        <S.HomeMenuWrapper>
          {menus.map((menuItem) => (
            <S.HomeMenu key={menuItem} onClick={() => handleClick(menuItem)}>
              {menuItem}
            </S.HomeMenu>
          ))}
        </S.HomeMenuWrapper>
      </S.Container>
      {isProfileEditModalOpen && (
        <S.Overlay onClick={() => handleProfileEditModalOpen(false)}>
          <EditProfileModal />
        </S.Overlay>
      )}
    </>
  );
}
