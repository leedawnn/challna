import { styled } from 'styled-components';
import MEDIA_QUERY from '../../../constants/mediaQuery';

const Header = () => {
  return (
    <>
      <div>이건 헤더</div>
      <Button>안녕!? 나는 버튼</Button>
    </>
  );
};

export default Header;

const Button = styled.button`
  ${MEDIA_QUERY.lg} {
    background-color: rebeccapurple;
  }

  ${MEDIA_QUERY.md} {
    background-color: yellow;
  }

  ${MEDIA_QUERY.sm} {
    background-color: royalblue;
  }
`;
