import styled from "styled-components";

export const BookmarkBtn = styled.div<{ isBookmarked: boolean }>`
  background-color: ${({ isBookmarked }) => (isBookmarked ? "yellow" : "gray")};
`;

export const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`;
