import { Link } from 'react-router-dom';
import { message } from '../../types/message';
import { MessageContainer, Content, DateTime, ContentWrapper } from './Message.styled';
import RightIcon from '../../assets/icons/RightIcon';
import Eclipse from '../../assets/icons/Eclipse';
import { ROUTES_PATH } from '../../constants/routes';

type Props = { contentList: message[] };

const Messagelist = ({ contentList }: Props) => {
  return (
    <div>
      {contentList.map((contentList) => {
        return (
          <MessageContainer key={contentList.board_id}>
            <Link to={ROUTES_PATH.messageDetail}>
              <ContentWrapper>
                <Content>
                  <Eclipse />
                </Content>
                <Content>{contentList.content}</Content>
                <Content>
                  <RightIcon />
                </Content>
              </ContentWrapper>
              <DateTime>{contentList.dateTime}</DateTime>
            </Link>
          </MessageContainer>
        );
      })}
    </div>
  );
};

export default Messagelist;
