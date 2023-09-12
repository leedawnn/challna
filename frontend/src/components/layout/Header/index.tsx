// import backButton from '../../../assets/back.svg';
// import moreButton from '../../../assets/more.svg';
import rightButton from '../../../assets/right.svg';
import { styled } from 'styled-components';
import { useAtomValue } from 'jotai';
import { userStore } from '../../../stores/userStore';

const Header = () => {
  const userInfo = useAtomValue(userStore);

  return (
    <Layout>
      <UserWrapper>
        <UserTitle> {userInfo?.kakaoName ?? "김태웅"} 님 </UserTitle>
        <MenuItem src={rightButton} alt="오른쪽 버튼" />
      </UserWrapper>
      {/* <MoreWrapper>
        <MenuItem src={backButton} alt="뒤로가기 버튼" />
        <MenuItem src={moreButton} alt="더보기 버튼" />
      </MoreWrapper> */}
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  position: sticky;
  top: 0;

  width: inherit;
  height: 6rem;

  background-color: #fff;

  padding: 2.2rem 2.4rem 0 2.4rem;
  box-sizing: border-box;
  margin: 0 auto;
`;

const UserWrapper = styled.div`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

const UserTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.subHead3.fontFamily };
  font-style: ${({ theme }) => theme.typography.subHead3.fontStyle };
  font-size: ${({ theme }) => theme.typography.subHead3.fontSize };
  line-height: ${({ theme }) => theme.typography.subHead3.lineHeight };
  
  margin: 0;
  padding: 2px;
  box-sizing: border-box;
`;

// const MoreWrapper = styled.div`

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

// `;

const MenuItem = styled.img`
  cursor: pointer;
`;
