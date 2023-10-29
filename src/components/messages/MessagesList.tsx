import { Link } from 'react-router-dom';
import { Content, ContentWrapper, DateTime, MessageContainer, RightContent } from './Message.styled';
import Eclipse from '../../assets/icons/Eclipse';
import RightIcon from '../../assets/icons/RightIcon';
import { message } from '../../types/message';

type Props = { contentList: message[] };

const Messagelist = ({ contentList }: Props) => {
  return (
    <div>
      {contentList?.map((contentList) => {
        return (
          <MessageContainer key={contentList.board_id}>
            <Link to={`/message/${contentList.board_id}`} key={contentList.board_id} state={contentList}>
              <ContentWrapper>
                <Content>
                  <Eclipse />
                </Content>
                <Content>
                  {contentList.content}
                  <DateTime>{contentList.dateTime}</DateTime>
                </Content>
                <RightContent>
                  <RightIcon $type="message" />
                </RightContent>
              </ContentWrapper>
            </Link>
          </MessageContainer>
        );
      })}
    </div>
  );
};

export default Messagelist;
