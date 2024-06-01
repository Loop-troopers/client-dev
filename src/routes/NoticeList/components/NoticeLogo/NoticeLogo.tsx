import * as S from "./NoticeLogo.style";

// 그룹별 이미지 경로 정의
const groupImageSrc: { [key: string]: string } = {
  sw_major: "/images/sw_major.png",
  sw_7up: "/images/sw_7up.png",
  default: "/images/default_logo.png",
};

export default function NoticeLogo({ group }: { group: string }) {
  return (
    <S.NoticeItemLogoWrapper>
      <S.NoticeItemLogo src={groupImageSrc[group] || groupImageSrc.default} />
    </S.NoticeItemLogoWrapper>
  );
}
