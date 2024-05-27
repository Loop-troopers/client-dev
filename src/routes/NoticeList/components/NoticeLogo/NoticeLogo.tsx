import * as S from "./NoticeLogo.style";

// 그룹별 이미지 경로 정의
const groupImageSrc: { [key: string]: string } = {
  sw_major_notice: "/images/sw_major.jpg",
  sw_7up_notice: "/images/sw_7up.png",
  default: "/images/default_logo.png",
};

export default function NoticeLogo({ group }) {
  return (
    <S.NoticeItemLogoWrapper>
      <S.NoticeItemLogo
        $group={group}
        src={groupImageSrc[group] || groupImageSrc.default}
      />
    </S.NoticeItemLogoWrapper>
  );
}
