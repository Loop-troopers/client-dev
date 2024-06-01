import styled from "styled-components";
import BackSpaceBtn from "../BackSpaceBtn/BackSpaceBtn";
import { useLocation } from "react-router-dom";
import { PAGE_NAME } from "../../constants/contstants";
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
  justify-content: center;
  align-items: center;
  border-radius: 0 0 1rem 1rem;
  z-index: 10;
`;

const BtnWrapper = styled.div`
  position: absolute;
  left: 2rem;
`;
const PageName = styled.h1`
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  color: white;
`;

export default function TopNavBar() {
  const { pathname } = useLocation();
  const pageName = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  return (
    <Wrapper>
      <BtnWrapper>
        <BackSpaceBtn />
      </BtnWrapper>
      <PageName>{PAGE_NAME[pageName]}</PageName>
    </Wrapper>
  );
}
