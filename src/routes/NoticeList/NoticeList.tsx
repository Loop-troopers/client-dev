import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import useBottomSheet from "../../hooks/useBottomSheet";
import NoticeDetail from "./components/NoticeDetail/NoticeDetail";
import { INotice } from "./types/type";
import * as S from "./styles/NoticeList.style";
import NoticeCard from "./components/NoticeDetail/components/NoticeCard/NoticeCard";
import NoticeFilter from "../../components/NoticeFilter/NoticeFilter";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

// 공지사항 목록
export default function NoticeList() {
  const [notice, setNotice] = useState<INotice[]>([]);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const { onDragEnd, controls, setIsOpen } = useBottomSheet();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await getNotice();

        setNotice(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotice();
  }, []);

  // 필터링된 공지사항 반환
  const filteredNotice = useMemo(() => {
    if (selectedGroup === "all") {
      return notice;
    }

    return notice.filter(
      (noticeItem) => noticeItem.noticeGroup === selectedGroup
    );
  }, [notice, selectedGroup]);

  return (
    <>
      <ScrollToTop />
      <NoticeFilter
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <S.Container>
        {filteredNotice.map((noticeItem) => (
          <NoticeCard
            key={noticeItem.noticeId}
            noticeId={noticeItem.noticeId}
            noticeGroup={noticeItem.noticeGroup}
            title={noticeItem.title}
            setIsOpen={setIsOpen}
            setSelectedNoticeId={setSelectedNoticeId}
          />
        ))}
        <BottomSheet onDragEnd={onDragEnd} controls={controls}>
          {selectedNoticeId ? (
            <NoticeDetail selectedNoticeId={selectedNoticeId} />
          ) : null}
        </BottomSheet>
      </S.Container>
    </>
  );
}

// GET: 학과, 소중사 공지사항
const getNotice = async () => {
  const noticeURL = `/api/notice`;

  return axios.get(noticeURL);
};
