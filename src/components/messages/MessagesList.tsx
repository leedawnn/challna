// import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';
import { message } from '../../types/message';
// import { userStore } from '../../stores/userStore';
// import { useMessageLists } from '../../hooks/useMessageList';
import { MessageContainer, Content, DateTime, ContentWrapper } from './Message.styled';
import RightIcon from '../../assets/icons/RightIcon';
import Eclipse from '../../assets/icons/Eclipse';
import { ROUTES_PATH } from '../../constants/routes';

type Props = { ContentList: message[] };

const Messagelist = ({ ContentList }: Props) => {
  return (
    <div>
      {ContentList &&
        ContentList.map((List) => {
          return (
            <MessageContainer key={List.board_id}>
              <Link to={ROUTES_PATH.messageDetail}>
                <ContentWrapper>
                  <Content>
                    <Eclipse />
                  </Content>
                  <Content>{List.content}</Content>
                  <Content>
                    <RightIcon />
                  </Content>
                </ContentWrapper>
                <DateTime>{List.dateTime}</DateTime>
              </Link>
            </MessageContainer>
          );
        })}
    </div>
  );
};

export default Messagelist;
