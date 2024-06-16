import NoticeLogo from "../../../NoticeLogo/NoticeLogo";
import React from "react";
import * as S from "./NoticeCard.style";

interface INoticeCardProps {
  noticeId: string;
  noticeGroup: string;
  title: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNoticeId?: React.Dispatch<React.SetStateAction<string>>;
}
export default function NoticeCard({
  noticeId,
  noticeGroup,
  title,
  setIsOpen,
  setSelectedNoticeId,
}: INoticeCardProps) {
  return (
    <S.NoticeItem
      key={noticeId}
      onClick={() => {
        setIsOpen?.(true);
        setSelectedNoticeId?.(noticeId);
      }}
    >
      <NoticeLogo group={noticeGroup} />
      <S.Title>{title}</S.Title>
    </S.NoticeItem>
  );
}
