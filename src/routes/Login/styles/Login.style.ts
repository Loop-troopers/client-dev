import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 0.05em;
`;

export const FormWrapper = styled.div`
  width: 75%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1.25rem;
  padding: 0 2rem;
  background-color: rgba(235, 235, 235, 0.5);
  border: none;
  border-radius: 0.5rem;
  &:focus {
    outline-color: rgba(70, 130, 180, 0.9);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  background-color: rgba(70, 130, 180, 0.9);
  border-radius: 0.375rem;
  color: white;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  &:focus {
    outline-color: rgba(70, 130, 180, 1);
  }
  &:disabled {
    background-color: rgba(70, 130, 180, 0.5);
  }
`;

export const SignupHeader = styled.div`
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 3.5rem;
  letter-spacing: 0.05em;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;
