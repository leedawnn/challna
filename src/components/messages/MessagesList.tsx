import { Link } from 'react-router-dom';
import { Content, ContentWrapper, DateTime, MessageContainer, RightContent } from './Message.styled';
import Eclipse from '../../assets/icons/Eclipse';
import RightIcon from '../../assets/icons/RightIcon';
import { message } from '../../types/message';

type Props = { contentList: message[] };

const Messagelist = ({ contentList }: Props) => {
  return contentList?.map((Contents) => {
    return (
      <MessageContainer key={Contents.board_id}>
        <Link to={`/message/details/${Contents.board_id}`} key={Contents.board_id} state={Contents}>
          <ContentWrapper>
            <Content>
              <Eclipse />
            </Content>
            <Content>
              {Contents.content}
              <DateTime>{Contents.dateTime}</DateTime>
            </Content>
            <RightContent>
              <RightIcon $type="message" />
            </RightContent>
          </ContentWrapper>
        </Link>
      </MessageContainer>
    );
  });
};

export default Messagelist;
