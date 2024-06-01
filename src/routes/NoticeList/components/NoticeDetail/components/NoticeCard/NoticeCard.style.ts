import styled from "styled-components";

export const NoticeItem = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
  z-index: 20;

  &:hover {
    border: 2px solid var(--primary-color); /* 원하는 색상으로 변경 */
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
  /* flex-basis: 80%; */
  padding: 1rem 0.5rem 1rem 0;
  white-space: nowrap;
  /* display: inline-block; */
  overflow: hidden;
  text-overflow: ellipsis;
`;
