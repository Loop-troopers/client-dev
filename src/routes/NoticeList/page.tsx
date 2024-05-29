import { useParams } from "react-router-dom";
import NoticeDetail from "./components/NoticeDetail/NoticeDetail";
import styled from "styled-components";

const Container = styled.div`
  padding: var(--top-navbar-height) 0 calc(var(--btm-navbar-height) * 2);
`;
export default function Page() {
  const { noticeId } = useParams();
  return (
    <Container>
      <NoticeDetail selectedNoticeId={noticeId} />
    </Container>
  );
}
