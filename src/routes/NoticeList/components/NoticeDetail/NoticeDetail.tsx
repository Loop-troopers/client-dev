import axios from "axios";
import { useEffect, useState } from "react";
import { INoticeDetail } from "../../types/type";
import * as S from "./styles/NoticeDetail.style";

// 공지사항 상세 (바텀시트)
interface NoticeDetailProps {
  selectedNoticeId: string;
}
export default function NoticeDetail({ selectedNoticeId }: NoticeDetailProps) {
  // 공지사항 상세 상태
  const [noticeDetail, setNoticeDetail] = useState<INoticeDetail>();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const { data: noticeDetailData } = await getNoticeDetail(
          selectedNoticeId
        );

        setNoticeDetail(noticeDetailData);
      } catch (error) {
        console.error("Error fetching notice detail:", error);
      }
    };
    if (selectedNoticeId) {
      fetchNoticeDetail();
    }
  }, [selectedNoticeId]);

  const handleBookmarkClick = () => {
    postNoticeBookmark(noticeId);
    setIsBookmarked(!isBookmarked);
  };

  if (!noticeDetail) return null;

  const { noticeId, category, title, body, imageUrls, tables } = noticeDetail;
  console.log(body);

  return (
    <S.NoticeDetailWrapper>
      <S.HeaderWrapper>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
        <S.BookmarkBtn
          $isBookmarked={isBookmarked}
          onClick={() => handleBookmarkClick()}
        ></S.BookmarkBtn>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        {imageUrls && imageUrls.length > 0 && (
          <S.ImageWrapper>
            {imageUrls.map((imageUrlItem) => (
              <S.Image key={imageUrlItem} src={imageUrlItem} alt="" />
            ))}
          </S.ImageWrapper>
        )}
        <S.Table dangerouslySetInnerHTML={{ __html: tables }} />
        <S.Body dangerouslySetInnerHTML={{ __html: body }} />
        {/* <S.Body>{body}</S.Body> */}
      </S.ContentWrapper>
    </S.NoticeDetailWrapper>
  );
}

// GET: 학과, 소중사 공지사항 상세
const getNoticeDetail = async (selectedNoticeId: string) => {
  const noticeDetailURL = `/api/notice/${selectedNoticeId}`;

  return await axios.get<INoticeDetail>(noticeDetailURL);
};

const postNoticeBookmark = async (noticeId: number | string) => {
  const bookmarkPostURL = `/api/bookmark`;
  await axios
    .post(
      bookmarkPostURL,
      {
        noticeId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    ?.then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    ?.catch((e) => {
      alert("북마크 저장 실패");
      return false;
    });
};
