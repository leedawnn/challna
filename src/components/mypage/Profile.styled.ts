import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  & > div {
    flex-grow: 1;
  }
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
`;

export const ContnetCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  box-sizing: border-box;
`;

export const CountText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.point};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CountTitleText = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
`;
