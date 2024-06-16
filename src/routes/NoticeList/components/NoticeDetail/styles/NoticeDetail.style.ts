import styled from "styled-components";

export const NoticeDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid black;
`;

export const MetaWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  height: 80%;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CreatedAt = styled.div`
  height: 20%;
  font-size: 0.8rem;
  text-align: center;
`;

export const Title = styled.h1`
  width: 75%;
  line-height: 140%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  line-height: 180%;
  padding: 1rem;
`;

export const Body = styled.div`
  width: 100%;
  overflow: auto;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Table = styled.div`
  width: 100%;
  overflow: auto;
  margin-bottom: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Button = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
`;
