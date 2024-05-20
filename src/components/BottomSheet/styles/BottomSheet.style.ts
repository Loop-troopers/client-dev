import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 31vh;
  left: 0;
  right: 0;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: var(--btm-sheet-height);
  margin: 0 auto;
`;

export const HeaderWrapper = styled(motion.div)`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

export const HandleBar = styled(motion.div)`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  height: 80vh;
  padding: 2rem;
  padding-bottom: calc(var(--btm-navbar-height) + 20vh);
  overflow: auto;
`;
