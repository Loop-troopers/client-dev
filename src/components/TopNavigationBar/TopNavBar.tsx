import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  height: var(--top-navbar-height);
  background-color: blue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function TopNavBar() {
  return <Wrapper></Wrapper>;
}
