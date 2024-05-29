import * as S from "./styles/NoticeFilter.style";
import { NOTICE_GROUP } from "../../constants/contstants";
import { NOTICE_GROUPS } from "../../constants/contstants";

export default function NoticeFilter({ selectedGroup, setSelectedGroup }) {
  return (
    <>
      {/* 필터링 버튼 */}
      <S.FilterButtonContainer>
        {NOTICE_GROUPS.map((group) => (
          <S.FilterButton
            key={group}
            onClick={() => setSelectedGroup(group)}
            $isSelected={selectedGroup === group}
          >
            {NOTICE_GROUP[group]}
          </S.FilterButton>
        ))}
      </S.FilterButtonContainer>
    </>
  );
}
