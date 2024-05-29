import styled from "styled-components";

export const FilterButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: var(--top-navbar-height);
  height: calc(var(--top-navbar-height) * 2);
  position: fixed;
  background-color: var(--main-bg-color);
  overflow: auto;
`;

export const FilterButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  min-width: fit-content;
  height: 3rem;
  margin: 1rem 0rem 1rem 1rem;
  padding: 1rem;
  border: 2px solid;
  border-color: ${({ $isSelected }) =>
    $isSelected ? "var(--primary-color)" : "var(--tertiary-color)"};
  color: ${({ $isSelected }) =>
    $isSelected ? "var(--primary-color)" : "var(--tertiary-color)"};
  /* font-weight: ${({ $isSelected }) => ($isSelected ? "bold" : null)}; */
  font-weight: bold;
  border-radius: 1.2rem;
  line-height: 100%;
  background-color: white;
`;
