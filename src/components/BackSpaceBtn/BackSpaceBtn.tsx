import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackSpaceBtnIcon = styled(RiArrowGoBackLine)`
  font-size: 1.6rem;
  color: white;
`;

export default function BackSpaceBtn() {
  const navigate = useNavigate();
  return <BackSpaceBtnIcon onClick={() => navigate(-1)} />;
}
