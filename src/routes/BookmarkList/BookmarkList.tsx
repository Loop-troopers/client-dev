import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding-top: var(--top-navbar-height);
`;

export default function BookmarkList() {
  useEffect(() => {
    const saveBookmark = async () => {
      const response = await postBookmark();
      console.log(response);
    };
    saveBookmark();
  }, []);

  return <Wrapper>저장 목록</Wrapper>;
}

// POST: 북마크 저장
const postBookmark = async () => {
  const bookmarkURL = `/api/bookmark`;

  const response = await axios.post(bookmarkURL);

  return response;
};
