import axios from "axios";
import { useNavigate } from "react-router-dom";

// 로그아웃 훅
export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    const logoutURL = `api/logout`;
    axios
      .get(logoutURL)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
          alert("로그아웃 되었습니다.");
        }
      })
      .catch((e) => {});
  };

  return logout;
};
