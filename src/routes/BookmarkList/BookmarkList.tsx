import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles/BookmarkList.style";
import { Link } from "react-router-dom";
import NoticeCard from "../NoticeList/components/NoticeDetail/components/NoticeCard/NoticeCard";

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const showBookmarks = async () => {
      const { data: myBookmarkData } = await getBookmarks();

      setBookmarks(myBookmarkData);
    };
    showBookmarks();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.BookmarkIcon />
          {bookmarks.length} 개
        </S.Header>
        {bookmarks.map((bookmarkItem) => (
          <Link
            to={`/notices/${bookmarkItem.noticeId}`}
            key={bookmarkItem.noticeId}
          >
            <NoticeCard
              noticeId={bookmarkItem.noticeId}
              noticeGroup={bookmarkItem.noticeGroup}
              title={bookmarkItem.title}
            />
          </Link>
        ))}
      </S.Wrapper>
    </>
  );
}

// GET: 북마크 불러오기
const getBookmarks = async () => {
  const myBookmarkURL = `/api/user_bookmarks`;

  return await axios.get(myBookmarkURL);
};
