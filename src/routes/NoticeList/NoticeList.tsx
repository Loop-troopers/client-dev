import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import useBottomSheet from "../../hooks/useBottomSheet";
import NoticeDetail from "./components/NoticeDetail/NoticeDetail";
import { INotice, ISelectedNoticeInfo } from "./types/type";
import * as S from "./styles/NoticeList.style";
import NoticeLogo from "./components/NoticeLogo/NoticeLogo";

// 공지사항 목록
export default function NoticeList() {
  const [notice, setNotice] = useState<INotice[]>([]);
  const [selectedNoticeInfo, setSelectedNoticeInfo] =
    useState<ISelectedNoticeInfo>();
  const [selectedGroup, setSelectedGroup] = useState<string>("전체");
  const { onDragEnd, controls, setIsOpen } = useBottomSheet();

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        // 반환된 promise 객체들로부터 성공한 것만 상태에 추가
        const promiseResults = await getNotice();

        const successfulResults: INotice[] = [];

        promiseResults.forEach((promise) => {
          if (
            promise.status === "fulfilled" &&
            Array.isArray(promise.value.data)
          ) {
            successfulResults.push(...promise.value.data);
          }
        });

        setNotice(successfulResults);
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

    return notice.filter((noticeItem) => noticeItem.group === selectedGroup);
  }, [notice, selectedGroup]);

  return (
    <S.Wrapper>
      {/* 필터링 버튼 */}
      <S.FilterButtonWrapper>
        {["전체", "sw_major_notice", "sw_7up_notice"].map((group) => (
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
        <S.NoticeItem
          key={noticeItem.noticeId}
          onClick={() => {
            setIsOpen(true);
            setSelectedNoticeInfo([noticeItem.group, noticeItem.noticeId]);
          }}
        >
          <NoticeLogo group={noticeItem.group} />
          <S.Title>{noticeItem.title}</S.Title>
        </S.NoticeItem>
      ))}
      <BottomSheet onDragEnd={onDragEnd} controls={controls}>
        {selectedNoticeInfo ? (
          <NoticeDetail selectedNoticeInfo={selectedNoticeInfo} />
        ) : null}
      </BottomSheet>
    </S.Wrapper>
  );
}

// GET: 학과, 소중사 공지사항
const getNotice = async () => {
  const swMajorNoticeURL = `/api/sw_major_notice`;
  const sw7upNoticeURL = `/api/sw_7up_notice`;

  const promiseResults = await Promise.allSettled([
    axios.get(swMajorNoticeURL),
    axios.get(sw7upNoticeURL),
  ]);

  return promiseResults;
};
