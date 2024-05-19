import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--top-navbar-height) 1rem 1rem;
`;

const NoticeItem = styled.div`
  width: 100%;
  height: 4rem;
  /* border: 1px solid black; */
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-overflow: ellipsis;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.1),
    0px 1px 0px 0px rgba(25, 28, 33, 0.02),
    0px 0px 0px 1px rgba(25, 28, 33, 0.08);
`;

const PageCategory = styled.span`
  width: 4rem;
  display: flex;
  flex-basis: 20%;
`;
const Title = styled.div`
  display: flex;
  flex-basis: 80%;
`;

interface INotice {
  group: string;
  notice_id: number;
  title: string;
  created_at?: string;
}

// 공지사항 목록
export default function NoticeList() {
  const [notice, setNotice] = useState<INotice[]>([]);

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

  return (
    <Wrapper>
      {notice
        ? notice.map((noticeItem) => (
            <Link key={noticeItem.notice_id} to={`${noticeItem.notice_id}`}>
              <NoticeItem>
                <PageCategory>{noticeItem.group}</PageCategory>
                <Title>{noticeItem.title}</Title>
              </NoticeItem>
            </Link>
          ))
        : null}
    </Wrapper>
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
