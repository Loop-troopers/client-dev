import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: var(--top-navbar-height) 0 var(--btm-navbar-height);
  background-color: var(--main-bg-color);
`;
export const HomeImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 3rem 2.5rem;
  filter: brightness(100%);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
`;
export const HomeBgImage = styled.img`
  width: 100%;
  margin: auto;
`;

export const HomeMenuWrapper = styled.div`
  overflow: auto;
  background-color: white;
`;

export const HomeMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid lightgray;
  margin: auto;
  font-size: 1.1rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;
