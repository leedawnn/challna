import { Link, useLocation, useNavigate } from 'react-router-dom';

import BackButton from '../../../assets/icons/BackIcon';
import { MEDIA_QUERY } from '../../../constants/styles';
import MoreIcon from '../../../assets/icons/MoreIcon';
import { ROUTES_PATH } from '../../../constants/routes';
import RightButton from '../../../assets/icons/RightIcon';
import { styled } from 'styled-components';
import { useAtomValue } from 'jotai';
import { userStore } from '../../../stores/userStore';
import { validateCheckDetail } from '../../../utils/validate';

const Header = () => {
  const { pathname } = useLocation();
  const naviagte = useNavigate();
  const userInfo = useAtomValue(userStore);

  const handleBackUrl = () => {
    naviagte(-1);
  };

  return (
    <Layout>
      {validateCheckDetail(pathname) ? (
        <MoreWrapper>
          <BackButton onClick={handleBackUrl} />
          <MoreIcon />
        </MoreWrapper>
      ) : (
        <UserWrapper to={ROUTES_PATH.mypage}>
          <UserTitle> {userInfo?.kakaoName ?? '김태웅'} 님 </UserTitle>
          <RightButton />
        </UserWrapper>
      )}
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  width: inherit;
  height: 6rem;

  background-color: #fff;

  padding: 2rem 2.4rem;
  box-sizing: border-box;
  margin: 0 auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;

const UserWrapper = styled(Link)`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  cursor: pointer;

  & > svg {
    width: 0.9em;
    height: 0.9em;
    padding-bottom: 3px;
  }
`;

const UserTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily};
  font-size: 2rem;
  line-height: ${({ theme }) => theme.typography.subHead3.lineHeight};

  margin: 0;
  padding: 2px;
  box-sizing: border-box;

  ${MEDIA_QUERY.sm} {
    font-size: ${({ theme }) => theme.typography.subHead4.fontSize};
  }
`;

const MoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`;
