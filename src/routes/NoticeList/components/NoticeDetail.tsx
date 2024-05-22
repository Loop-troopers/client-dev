import axios from "axios";
import { useEffect, useState } from "react";
import { INoticeDetailData, ISelectedNoticeInfo } from "../types/type";
import styled from "styled-components";

interface NoticeDetailProps {
  selectedNoticeInfo: ISelectedNoticeInfo;
}

const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`;

// 공지사항 상세 (바텀시트)
export default function NoticeDetail({
  selectedNoticeInfo,
}: NoticeDetailProps) {
  // 공지사항 상세 상태
  const [noticeDetail, setNoticeDetail] = useState<INoticeDetailData | null>(
    null
  );

  // 전달 props 바뀔 때마다 해당 props를 조합하여 공지사항 상세 api 요청
  useEffect(() => {
    async function fetchNoticeDetail() {
      try {
        const noticeDetailData = await getNoticeDetail(selectedNoticeInfo);

        setNoticeDetail(noticeDetailData);
      } catch (error) {
        console.error("Error fetching notice detail:", error);
      }
    }
    if (selectedNoticeInfo?.length === 2) {
      fetchNoticeDetail();
    }
  }, [selectedNoticeInfo]);

  if (!noticeDetail) return null;

  const { category, title, body, imageUrls, tables } = noticeDetail;
  console.log(imageUrls);
  console.log(tables);

  return (
    <div>
      <div>{category}</div>
      <div>{title}</div>
      <div>{body}</div>
      <h1>첨부파일</h1>
      {imageUrls.map((imageUrlItem) => (
        <Button>첨부 파일</Button>
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
  const response = await axios.get(noticeDetailURL);

  return response.data;
};
