import { IoBookmarks } from "react-icons/io5";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: var(--top-navbar-height) 1rem var(--btm-navbar-height);
  background-color: var(--main-bg-color);
`;

export const Header = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const BookmarkIcon = styled(IoBookmarks)`
  color: var(--secondary-color);
`;
export const FilterButtonWrapper = styled.section`
  width: 100%;
  height: 1rem;
`;

export const FilterButton = styled.button<{ $isSelected: boolean }>`
  width: 3rem;
  height: 1rem;
  background-color: ${({ $isSelected }) => ($isSelected ? "coral" : "white")};
`;

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
`;

export const Title = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 80%;
  padding: 1rem 0.5rem 1rem 0;
`;
