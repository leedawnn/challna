import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 15;
  transform: translate(-50%, 0);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); // 임의 box-shadow

  max-width: 57.6rem;
  width: 100%;
  height: 197px;

  overflow-y: hidden;

  padding: 40px 30px 0 30px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding-bottom: 20px;
  box-sizing: border-box;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
  }
`;

export const EditText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  margin-left: 1.2rem;
`;

export const DeleteText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-left: 1.2rem;
`;
