import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import useBottomSheet from "../../hooks/useBottomSheet";
import NoticeDetail from "./components/NoticeDetail/NoticeDetail";
import { INotice } from "./types/type";
import * as S from "./styles/NoticeList.style";
import NoticeCard from "./components/NoticeDetail/components/NoticeCard/NoticeCard";

// 공지사항 목록
export default function NoticeList() {
  const [notice, setNotice] = useState<INotice[]>([]);
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("전체");
  const { onDragEnd, controls, setIsOpen } = useBottomSheet();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        // 반환된 promise 객체들로부터 성공한 것만 상태에 추가
        const response = await getNotice();

        console.log(response);

        setNotice(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotice();
  }, []);

  // 필터링된 공지사항 반환
  const filteredNotice = useMemo(() => {
    if (selectedGroup === "전체") {
      return notice;
    }

    return notice.filter(
      (noticeItem) => noticeItem.noticeGroup === selectedGroup
    );
  }, [notice, selectedGroup]);

  return (
    <S.Wrapper>
      {/* 필터링 버튼 */}
      <S.FilterButtonWrapper>
        {["전체", "sw_major", "sw_7up"].map((group) => (
          <S.FilterButton
            key={group}
            onClick={() => setSelectedGroup(group)}
            $isSelected={selectedGroup === group}
          >
            {group}
          </S.FilterButton>
        ))}
      </S.FilterButtonWrapper>
      {filteredNotice.map((noticeItem) => (
        <NoticeCard
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
    </S.Wrapper>
  );
}

// GET: 학과, 소중사 공지사항
const getNotice = async () => {
  const noticeURL = `/api/notice`;

  return axios.get(noticeURL);
};
