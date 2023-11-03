import styled from 'styled-components';

export const ProfileImageWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  margin-top: 30px;
`;

export const ProfileTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};
`;

export const UpdateForm = styled.form`
  position: relative;

  width: 100%;

  border-radius: 50%;

  display: flex;
  flex-direction: column;
`;

export const ProfileImageLabel = styled.label`
  position: relative;

  width: 80px;
  height: 80px;

  cursor: pointer;

  align-self: center;

  & > svg {
    position: absolute;
    bottom: 0;
    right: -5px;
    z-index: 30;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;

  object-fit: contain;

  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
`;

export const FileInput = styled.input`
  display: none;
`;

export const ProfileNameWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-top: 38px;
`;

export const ProfileNameLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};
`;

export const ProfileNameInput = styled.input`
  all: unset;

  width: 100%;
  height: 40px;

  padding-left: 12px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.lightGray};

  border: 1px solid ${({ theme }) => theme.colors.lightGray3};
  border-radius: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const SaveButton = styled.button`
  all: unset;

  width: 100%;
  height: 40px;

  text-align: center;

  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(146, 181, 217, 0.5);
  background-color: ${({ theme }) => theme.colors.point};

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.subHead};
  font-family: ${({ theme }) => theme.typography.subHead};
  line-height: 40px;

  cursor: pointer;
`;

export const CancelButton = styled.button`
  all: unset;

  width: 100%;
  height: 40px;

  text-align: center;
  text-decoration: underline;
  border-radius: 5px;

  font-size: ${({ theme }) => theme.typography.subHead};
  font-family: ${({ theme }) => theme.typography.subHead};

  cursor: pointer;
`;
