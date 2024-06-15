import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import styled from "styled-components";
import { INotice } from "../../routes/NoticeList/types/type";
import axios from "axios";

const BookmarkBtnIcon = styled(FaBookmark)<{ $isBookmarked: boolean }>`
  font-size: 1.6rem;
  color: ${({ $isBookmarked }) => ($isBookmarked ? "#f8e709" : "gray")};
  transition: color 0.3s ease;
`;

interface IBookmarkBtnProps {
  noticeId: INotice["noticeId"];
  isUserBookmarked: boolean;
}
export default function BookmarkBtn({
  noticeId,
  isUserBookmarked,
}: IBookmarkBtnProps) {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(isUserBookmarked);

  // Click Handler: 북마크
  const handleBookmarkClick = async () => {
    if (isBookmarked) {
      const result = await deleteNoticeBookmark(noticeId);
      if (result) {
        setIsBookmarked(false);
      }
    } else {
      const result = await postNoticeBookmark(noticeId);
      if (result) {
        setIsBookmarked(true);
      }
    }
  };

  return (
    <BookmarkBtnIcon
      $isBookmarked={isBookmarked}
      onClick={handleBookmarkClick}
    />
  );
}

// CREATE: 북마크 생성
const postNoticeBookmark = async (noticeId: number | string) => {
  const bookmarkPostURL = `/api/bookmark`;
  try {
    const res = await axios.post(
      bookmarkPostURL,
      { noticeId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 201) {
      return true;
    }
  } catch (e) {
    alert("북마크 저장 실패");
    return false;
  }
};

// DELETE: 북마크 삭제
const deleteNoticeBookmark = async (noticeId: number | string) => {
  const bookmarkDeleteURL = `/api/bookmark/${noticeId}`;
  try {
    const res = await axios.delete(bookmarkDeleteURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      return true;
    }
  } catch (e) {
    alert("북마크 취소 실패");
    return false;
  }
};
