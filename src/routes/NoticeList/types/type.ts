// 공지사항
export interface INotice {
  group: string;
  noticeId: number | string;
  title: string;
  createdAt?: string;
}

// 클릭된 공지사항 정보 (REST api에 필요한 요소: group, notice_id)
export type ISelectedNoticeInfo = [string, number | string];

// 공지사항 상세
export interface INoticeDetail {
  noticeId: number | string;
  category?: string;
  title: string;
  body: string;
  imageUrls?: string[];
  tables?: string[];
  createdAt?: string;
}
