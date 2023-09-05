import { MEDIA_QUERY } from '../../../constants/styles';
import { styled } from 'styled-components';

const Header = () => {
  return <Layout></Layout>;
};

export default Header;

const Layout = styled.header`
  ${MEDIA_QUERY.lg} {
    background-color: rebeccapurple;
  }

  ${MEDIA_QUERY.sm} {
    background-color: royalblue;
  }
`;
