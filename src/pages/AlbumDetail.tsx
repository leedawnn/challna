import styled from 'styled-components';
import AlbumDetailContent from '../components/home/Album/AlbumDetail/AlbumDetailContent';
import AlbumDetailSwiper from '../components/home/Album/AlbumDetail/AlbumDetailSwiper';

const AlbumDetailPage = () => {
  return (
    <Layout>
      <AlbumDetailSwiper />
      <AlbumDetailContent />
    </Layout>
  );
};

export default AlbumDetailPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
`;
