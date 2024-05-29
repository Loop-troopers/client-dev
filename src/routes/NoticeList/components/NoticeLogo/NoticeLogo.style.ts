import styled from "styled-components";

export const NoticeItemLogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: 20%;
`;

export const NoticeItemLogo = styled.img<{ $group: string }>`
  width: 60%;
  height: 60%;
  margin: auto;
`;
