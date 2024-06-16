import axios from "axios";
import { useEffect, useState } from "react";
import { INoticeDetail } from "../../types/type";
import * as S from "./styles/NoticeDetail.style";
import BookmarkBtn from "../../../../components/BookmarkBtn/BookmarkBtn";

// 공지사항 상세 (바텀시트)
interface NoticeDetailProps {
  selectedNoticeId: string;
}
export default function NoticeDetail({ selectedNoticeId }: NoticeDetailProps) {
  // 공지사항 상세 상태
  const [noticeDetail, setNoticeDetail] = useState<INoticeDetail>();

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const { data: noticeDetailData } = await getNoticeDetail(
          selectedNoticeId
        );
        // console.log("noticeDetailData: ", noticeDetailData);

        setNoticeDetail(noticeDetailData);
      } catch {
        // @@@에러처리필요
      }
    };
    if (selectedNoticeId) {
      fetchNoticeDetail();
    }
  }, [selectedNoticeId]);

  if (!noticeDetail) return null;

  const {
    noticeId,
    category,
    title,
    body,
    imageUrls,
    tables,
    createdAt,
    isUserBookmarked,
  } = noticeDetail;

  return (
    <S.NoticeDetailWrapper>
      <S.HeaderWrapper>
        <S.MetaWrapper>
          <S.Category>{category}</S.Category>
          <S.CreatedAt>{createdAt}</S.CreatedAt>
        </S.MetaWrapper>
        <S.Title>{title}</S.Title>
        <BookmarkBtn noticeId={noticeId} isUserBookmarked={isUserBookmarked} />
      </S.HeaderWrapper>
      <S.ContentWrapper>
        {imageUrls && imageUrls.length > 0 && (
          <S.ImageWrapper>
            {imageUrls?.map((imageUrlItem) => (
              <S.Image key={imageUrlItem} src={imageUrlItem} alt="" />
            ))}
          </S.ImageWrapper>
        )}
        <S.Table dangerouslySetInnerHTML={{ __html: tables }} />
        <S.Body dangerouslySetInnerHTML={{ __html: body }} />
      </S.ContentWrapper>
    </S.NoticeDetailWrapper>
  );
}

// GET: 학과, 소중사 공지사항 상세
const getNoticeDetail = async (selectedNoticeId: string) => {
  const noticeDetailURL = `/api/notice/${selectedNoticeId}`;

  return await axios.get<INoticeDetail>(noticeDetailURL);
};
