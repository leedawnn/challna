import { MEDIA_QUERY } from '../../../constants/styles';
// import BackButton from '../../../assets/icons/BackIcon';
// import MoreIcon from '../../../assets/icons/MoreIcon';
import RightButton from '../../../assets/icons/RightIcon';
import { styled } from 'styled-components';
import { useAtomValue } from 'jotai';
import { userStore } from '../../../stores/userStore';

const Header = () => {
  const userInfo = useAtomValue(userStore);

  return (
    <Layout>
      <UserWrapper>
        <UserTitle> {userInfo?.kakaoName ?? '김태웅'} 님 </UserTitle>
        <RightButton />
      </UserWrapper>
      {/* <MoreWrapper>
        <BackButton />
        <MoreIcon />
      </MoreWrapper> */}
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

  padding: 1.7rem 2.4rem;
  box-sizing: border-box;
  margin: 0 auto;
`;

const UserWrapper = styled.div`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 8px;

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

// const MoreWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   cursor: pointer;
// `;
