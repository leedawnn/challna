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

  min-width: 37.5rem;
  width: 100vw;
  height: 5.7rem;
  box-sizing: border-box;

  color: #fff;
  background-color: #292929;

  position: fixed;
  bottom: 0%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
