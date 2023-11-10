import styled from 'styled-components';
import AlbumDeatilImage from '../components/albumDetail/AlbumDetailImage';
import AlbumDetailContent from '../components/albumDetail/AlbumDetailContent';

const AlbumDetailPage = () => {
  return (
    <Layout>
      <AlbumDeatilImage />
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
