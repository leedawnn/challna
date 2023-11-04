import { Link } from 'react-router-dom';
import { Content, ContentWrapper, DateTime, MessageContainer, RightContent, IconContent } from './Message.styled';
import Eclipse from '../../assets/icons/Eclipse';
import RightIcon from '../../assets/icons/RightIcon';
import { message } from '../../types/message';

export type Props = { contentList: message[] };

const Messagelist = ({ contentList }: Props) => {
  return contentList?.map((contentsItem) => {
    return (
      <MessageContainer key={contentsItem.board_id}>
        <Link to={`/message/details/${contentsItem.board_id}`} key={contentsItem.board_id} state={contentsItem}>
          <ContentWrapper>
            {/* <Content> */}
            <IconContent>
              <Eclipse />
            </IconContent>
            {/* </Content> */}
            <Content>
              {contentsItem.content}
              <DateTime>{contentsItem.dateTime}</DateTime>
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
