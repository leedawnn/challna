import styled from 'styled-components';
import SnaapyLogo from '../../assets/images/snapyy.png';

const Logo = () => {
  return (
    <Wrapper>
      <SubTitle> 가장 소중하고 행복한 순간들 </SubTitle>
      <img src={SnaapyLogo} width="187px" alt="snappy_main-logo" />
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  width: max-content;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled.h2`
  width: 100%;

  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;

  margin: 0;
`;
