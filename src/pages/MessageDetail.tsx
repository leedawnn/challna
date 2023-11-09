import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import MessageImage from '../components/messageDetail/MessageImage';

const MessageDetailPage = () => {
  const { state: messageData } = useLocation();

  return (
    <Layout>
      <MessageImage messageDetailImages={messageData.boardImageViewDtoList} />
      <MessageText> {messageData.content} </MessageText>
      <MessageDataText> {messageData.dateTime} </MessageDataText>
    </Layout>
  );
};

export default MessageDetailPage;

const Layout = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const MessageText = styled.p`
  width: calc(100% - 48px);

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};

  padding: 20px 0;
  margin: 0 auto;
  margin-top: 20px;

  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};

  box-sizing: border-box;
`;

const MessageDataText = styled.span`
  height: 40px;

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  color: ${({ theme }) => theme.colors.gray1};

  padding: 0 24px;
  margin-top: 20px;
`;
