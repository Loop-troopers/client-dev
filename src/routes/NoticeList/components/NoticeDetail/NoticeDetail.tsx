import axios from "axios";
import { useEffect, useState } from "react";
import { INoticeDetail, ISelectedNoticeInfo } from "../../types/type";
import * as S from "./styles/NoticeDetail.style";
import { IoBookmarkOutline } from "react-icons/io5";

// 공지사항 상세 (바텀시트)
interface NoticeDetailProps {
  selectedNoticeInfo: ISelectedNoticeInfo;
}
export default function NoticeDetail({
  selectedNoticeInfo,
}: NoticeDetailProps) {
  // 공지사항 상세 상태
  const [noticeDetail, setNoticeDetail] = useState<INoticeDetail>(null);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  // 전달 props 바뀔 때마다 해당 props를 조합하여 공지사항 상세 api 요청
  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const noticeDetailData = await getNoticeDetail(selectedNoticeInfo);

        setNoticeDetail(noticeDetailData);
      } catch (error) {
        console.error("Error fetching notice detail:", error);
      }
    };
    if (selectedNoticeInfo?.length === 2) {
      fetchNoticeDetail();
    }
  }, [selectedNoticeInfo]);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    postNoticeBookmark(noticeId);
  };

  if (!noticeDetail) return null;

  const { noticeId, category, title, body, imageUrls, tables } = noticeDetail;

  console.log(imageUrls);
  console.log(tables);

  return (
    <div>
      <S.BookmarkBtn
        isBookmarked={isBookmarked}
        onClick={() => handleBookmarkClick()}
      >
        <IoBookmarkOutline />
      </S.BookmarkBtn>
      <div>{category}</div>
      <div>{title}</div>
      <div>{body}</div>
      <h1>첨부파일</h1>
      {imageUrls?.map((imageUrlItem) => (
        <img src={imageUrlItem} alt="" />
        // <Button>첨부 파일</Button>
      ))}
      <div>{tables}</div>
    </div>
  );
}

// GET: 학과, 소중사 공지사항 상세
const getNoticeDetail = async (
  selectedNoticeInfo: [string, string | number]
) => {
  const [noticeGroup, noticeId] = selectedNoticeInfo;

  const noticeDetailURL = `/api/${noticeGroup}/${noticeId}`;
  const response = await axios.get<INoticeDetail>(noticeDetailURL);

  return response.data;
};

const postNoticeBookmark = async (noticeId: number | string) => {
  const response = await axios.post(`/api/bookmark`, {
    noticeId: noticeId,
    userId: 1,
  });

  console.log(response);
};
