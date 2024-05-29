import { SetStateAction } from "react";
import { FaBookmark } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { INotice } from "../../routes/NoticeList/types/type";
import axios from "axios";

const fillAnimation = keyframes`
  0% {
    color: gray;
  }
  100% {
    color: #f8e709;
  }
`;
const BookmarkBtnIcon = styled(FaBookmark)<{ $isBookmarked: boolean }>`
  font-size: 1.6rem;
  color: ${({ $isBookmarked }) => ($isBookmarked ? "#f8e709" : "gray")};
  transition: color 0.3s ease;

  &:hover {
    animation: ${fillAnimation} 0.3s forwards;
  }
`;

interface IBookmarkBtnProps {
  noticeId: INotice["noticeId"];
  setIsBookmarked: React.Dispatch<SetStateAction<boolean>>;
  isBookmarked: boolean;
}
export default function BookmarkBtn({
  noticeId,
  isBookmarked,
  setIsBookmarked,
}: IBookmarkBtnProps) {
  const handleBookmarkClick = () => {
    postNoticeBookmark(noticeId);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <BookmarkBtnIcon
      $isBookmarked={isBookmarked}
      onClick={() => handleBookmarkClick()}
    />
  );
}

const postNoticeBookmark = async (noticeId: number | string) => {
  const bookmarkPostURL = `/api/bookmark`;
  await axios
    .post(
      bookmarkPostURL,
      {
        noticeId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    ?.then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    ?.catch((e) => {
      alert("북마크 저장 실패");
      return false;
    });
};
