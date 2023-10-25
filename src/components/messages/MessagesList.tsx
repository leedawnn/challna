import { Link } from 'react-router-dom';
import { message } from '../../types/message';
import { MessageContainer, Content, DateTime, ContentWrapper, RightContent } from './Message.styled';
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
                <Content>
                  {contentList.content}
                  <DateTime>{contentList.dateTime}</DateTime>
                </Content>
                {/* <Content> */}
                <RightContent>
                  <RightIcon />
                </RightContent>
                {/* </Content> */}
              </ContentWrapper>
            </Link>
          </MessageContainer>
        );
      })}
    </div>
  );
};

export default Messagelist;
