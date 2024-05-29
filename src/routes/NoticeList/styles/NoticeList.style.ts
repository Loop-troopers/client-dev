import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: var(--top-navbar-height) 1rem calc(var(--btm-navbar-height) * 2);
  background-color: var(--main-bg-color);
  z-index: 0;
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
