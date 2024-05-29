import styled from "styled-components";
import BackSpaceBtn from "../BackSpaceBtn/BackSpaceBtn";

const Wrapper = styled.nav`
  width: 100%;
  height: var(--top-navbar-height);
  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
  z-index: 10;
`;

export default function TopNavBar() {
  return (
    <Wrapper>
      <BackSpaceBtn />
    </Wrapper>
  );
}
