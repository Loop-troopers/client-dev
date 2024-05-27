import styled from "styled-components";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import { FaListUl } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";

export interface ITabContent {
  tab: string;
  path: string;
}

const Wrapper = styled.nav`
  width: 100%;
  height: var(--btm-navbar-height);
  background-color: blue;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 20;
`;

export default function BottomNavBar() {
  const content = [
    { icon: FaListUl, path: "/notices", text: "최신글" },
    { icon: IoBookmarks, path: "/bookmark", text: "북마크" },
    { icon: FaRegUser, path: "/profile", text: "내정보" },
  ];

  return (
    <Wrapper>
      {content.map((section, idx) => (
        <NavigationIcon
          key={idx}
          icon={section.icon}
          to={section.path}
          size="1.6rem"
          color="white"
          text={section.text}
        />
      ))}
    </Wrapper>
  );
}
