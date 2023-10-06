import { Link, useLocation, useNavigate } from 'react-router-dom';

import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { useAtomValue } from 'jotai';
import BackButton from '../../../assets/icons/BackIcon';
import { MEDIA_QUERY } from '../../../constants/styles';
import MoreIcon from '../../../assets/icons/MoreIcon';
import MoreModal from '../../common/Modal/MoreModal';
import { ROUTES_PATH } from '../../../constants/routes';
import RightButton from '../../../assets/icons/RightIcon';
import useVisible from '../../../hooks/useVisible';
import { userStore } from '../../../stores/userStore';
import { validateCheckDetail } from '../../../utils/validate';

const Header = () => {
  const { isVisible, handleChangeVisible } = useVisible();
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
          <MoreIcon onClick={handleChangeVisible} />
          {isVisible &&
            createPortal(
              <MoreModal handleChangeVisible={handleChangeVisible} />,
              document.getElementById('modal-root') as HTMLElement,
            )}
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

  background-color: #fff;

  box-sizing: border-box;
  margin: 0 auto;

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;

const UserWrapper = styled(Link)`
  width: max-content;
  height: 8rem;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  padding: 34px 0 20px 24px;
  box-sizing: border-box;
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
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem 2rem;
  box-sizing: border-box;

  & > svg {
    cursor: pointer;
  }
`;
