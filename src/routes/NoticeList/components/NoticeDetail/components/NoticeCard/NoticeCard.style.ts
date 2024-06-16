import styled from "styled-components";

export const NoticeItem = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 1rem 0.8rem 1rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
  z-index: 20;
  &:hover {
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    font-weight: 600;
  }
`;

export const Title = styled.div`
  display: block;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
