import styled from "styled-components";

const BadgeContainer = styled.div`
  position: absolute;
  top: 9.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Badge = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: var(--tertiary-color);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1rem;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
`;

export default function ProfileBadge({ username }) {
  return (
    <BadgeContainer>
      <Badge>{username}</Badge>
    </BadgeContainer>
  );
}
