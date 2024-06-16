import { useState, useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ProfileEditModal.style";

// 프로필 수정 모달
export default function EditProfileModal() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const oldPwdInputRef = useRef<HTMLInputElement | null>(null);
  const newPwdInputRef = useRef<HTMLInputElement | null>(null);
  const newPwdAgainInputRef = useRef<HTMLInputElement | null>(null);

  const handleOldPwdInputChange = () => {
    if (oldPwdInputRef.current) {
      setOldPassword(oldPwdInputRef.current.value);
    }
  };
  const handleNewPwdInputChange = () => {
    if (newPwdInputRef.current) {
      setNewPassword(newPwdInputRef.current.value);
    }
  };
  const handleNewPwdAgainInputChange = () => {
    if (newPwdAgainInputRef.current) {
      setNewPasswordAgain(newPwdAgainInputRef.current.value);
    }
  };

  // Submit handler: 프로필 수정
  const handleProfileEditSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!oldPassword) {
      return alert("기존 비밀번호를 입력하세요");
    }
    if (!newPassword) {
      return alert("새 비밀번호를 입력하세요");
    }
    if (!newPasswordAgain) {
      return alert("새 비밀번호가 일치하지 않습니다");
    }
    editProfile(oldPassword, newPassword);
  };

  // PATCH: 회원 정보 수정
  const editProfile = (oldPassword: string, newPassword: string) => {
    const editProfileURL = `api/edit_password`;
    const data = {
      oldPassword,
      newPassword,
    };
    setIsLoading(true);
    axios
      .patch(editProfileURL, data)
      .then((res) => {
        if (res.status === 200) {
          alert(
            "비밀번호 변경이 완료되었습니다. 새로운 비밀번호로 다시 로그인해주세요."
          );
          navigate("/");
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          alert("기존 비밀번호를 다시 확인해주세요.");
        }
      });
    setIsLoading(false);
  };

  return (
    <S.FormWrapper
      action=""
      onSubmit={handleProfileEditSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <S.FormContent>
        <S.Header>
          <S.Title>비밀번호 변경</S.Title>
        </S.Header>
        <S.InputContainer>
          <S.Label>기존 비밀번호</S.Label>
          <S.Input
            onChange={handleOldPwdInputChange}
            type="text"
            value={oldPassword}
            placeholder="Enter your current password"
            required
            ref={oldPwdInputRef}
          />
          <S.Label>새 비밀번호</S.Label>
          <S.Input
            onChange={handleNewPwdInputChange}
            type="password"
            value={newPassword}
            placeholder="Enter your Password"
            required
            ref={newPwdInputRef}
          />
          <S.Label>새 비밀번호 확인</S.Label>
          <S.Input
            onChange={handleNewPwdAgainInputChange}
            type="password"
            value={newPasswordAgain}
            placeholder="Enter your Password"
            required
            ref={newPwdAgainInputRef}
          />
          <S.SubmitButton disabled={isLoading}>완료</S.SubmitButton>
        </S.InputContainer>
      </S.FormContent>
    </S.FormWrapper>
  );
}
