import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Layout>
      <Container>이것은 푸터</Container>
    </Layout>
  );
};

export default Footer;

const Layout = styled.footer`
  display: flex;
  width: 100%;
  height: 80px;
  color: #fff;
  background-color: #292929;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
