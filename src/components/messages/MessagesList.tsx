import { Link } from 'react-router-dom';
import { Content, ContentWrapper, DateTime, MessageContainer, RightContent } from './Message.styled';

import Eclipse from '../../assets/icons/Eclipse';
import { ROUTES_PATH } from '../../constants/routes';
import RightIcon from '../../assets/icons/RightIcon';
import { message } from '../../types/message';

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
                  <RightIcon $type="message" />
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
