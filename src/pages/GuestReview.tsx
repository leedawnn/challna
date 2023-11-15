import styled from 'styled-components';
import GuestHeader from '../components/layout/Header/GuestHeader';
import GuestReviewSwiper from '../components/guestReview/GuestReviewSwiper';

const GuestReviewPage = () => {
  return (
    <Layout>
      <Container>
        <GuestHeader />
        <GuestReviewSwiper />
      </Container>
    </Layout>
  );
};

export default GuestReviewPage;

const Layout = styled.div`
  width: 57.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.section`
  width: 100%;
  max-width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);

  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
