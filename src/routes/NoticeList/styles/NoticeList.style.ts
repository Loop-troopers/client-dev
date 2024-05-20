import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: var(--top-navbar-height) 1rem calc(var(--btm-navbar-height) * 2);
`;

export const NoticeItem = styled.div`
  width: 100%;
  height: 4rem;
  /* border: 1px solid black; */
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-overflow: ellipsis;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
`;

export const PageCategory = styled.span`
  width: 4rem;
  display: flex;
  flex-basis: 20%;
`;
export const Title = styled.div`
  display: flex;
  flex-basis: 80%;
`;
