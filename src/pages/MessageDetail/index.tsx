import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import MessageImage from '../../components/messageDetail/MessageImage';

const MessageDetailPage = () => {
  const { state: messageData } = useLocation();

  return (
    <Layout>
      <MessageImage messageDetailImages={messageData.boardImageViewDtoList} />
    </Layout>
  );
};

export default MessageDetailPage;

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
