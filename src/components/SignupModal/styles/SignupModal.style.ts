import styled from "styled-components";

export const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 75%;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 1.5rem;
  /* filter: brightness(95%); */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 2s;
`;

export const FormContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 0.05em;
`;

export const InputContainer = styled.div`
  width: 85%;
`;

export const Label = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 0rem 2rem;
  background-color: rgba(229, 231, 235, 0.5);
  border: none;
  border-radius: 0.5rem;
  &:focus {
    outline-color: var(
      --primary-color
    ); /* Assuming --primary-color is defined in your CSS */
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  height: 3.5rem;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  color: white;
  background-color: var(--primary-color);
  border-radius: 1.5rem;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
