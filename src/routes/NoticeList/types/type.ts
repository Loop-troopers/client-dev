// 공지사항
export interface INotice {
  noticeId: string;
  noticeGroup: string;
  title: string;
  createdAt?: string;
}

// 공지사항 상세
export interface INoticeDetail {
  noticeId: string;
  noticeGroup: string;
  category?: string;
  title?: string;
  body?: string;
  imageUrls?: string[];
  tables?: string[];
  createdAt?: string;
  isUserBookmarked: boolean;
}
