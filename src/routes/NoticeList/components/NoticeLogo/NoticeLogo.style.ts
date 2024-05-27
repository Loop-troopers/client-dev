import styled from "styled-components";

export const NoticeItemLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  display: flex;
  flex-basis: 20%;
`;

export const NoticeItemLogo = styled.img<{ $group: string }>`
  width: 70%;
  height: 70%;
  margin: auto;
`;
