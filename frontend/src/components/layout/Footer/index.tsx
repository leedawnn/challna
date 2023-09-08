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
  justify-content: space-around;
  align-items: center;

  max-width: 57.6rem;
  width: 100%;
  height: 5.7rem;

  color: #fff;
  background-color: #292929;

  position: fixed;
  bottom: 0px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
