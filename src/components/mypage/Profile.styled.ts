import styled from 'styled-components';
import { MEDIA_QUERY } from '../../constants/styles';

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

  cursor: pointer;
`;

export const UserImage = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 57.6rem;
  width: 100%;

  object-fit: contain;
`;

export const ContnetCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  box-sizing: border-box;
`;

export const CountText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.point};
  font-family: ${({ theme }) => theme.fonts.bold};

  ${MEDIA_QUERY.sm} {
    font-size: 12px;
  }
`;

export const CountTitleText = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 15px;
`;

export const ProfileButton = styled.button`
  all: unset;

  width: 50%;
  height: 50px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.subHead.fontFamily};
  text-align: center;
  line-height: 40px;

  background-color: ${({ theme }) => theme.colors.point};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px rgba(146, 181, 217, 0.5);

  border-radius: 5px;
  cursor: pointer;

  ${MEDIA_QUERY.sm} {
    width: 156px;
    height: 40px;

    font-size: ${({ theme }) => theme.typography.subHead.fontSize};
  }
`;

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0;
  padding-top: 60px;

  box-sizing: border-box;
`;

export const MenuList = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};

  cursor: pointer;
`;

export const ListContentText = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;
