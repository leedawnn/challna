import { useLocation } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Container,
  MessageFooter,
  MessageFooterContainer,
  FooterText,
  MessageContentsContainer,
  MessageContent,
  ContentText,
} from './Messagedetail.styled';
import 'swiper/css';
import 'swiper/css/pagination';
import './MessageSwiper.css';

const MessageDetail = () => {
  const location = useLocation();
  const messageItem = location.state;
  const imageItem = messageItem.boardImageViewDtoList;
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[Pagination]}
        className="mainSwiper"
      >
        {imageItem?.map((List: any) => {
          return (
            <SwiperSlide>
              <img src={List.accessUrl} alt={List.originName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination" />
      <MessageContentsContainer>
        <MessageContent>
          <ContentText>{messageItem.content}</ContentText>
        </MessageContent>
      </MessageContentsContainer>
      <MessageFooterContainer>
        <MessageFooter>
          <FooterText> {messageItem.dateTime}</FooterText>
        </MessageFooter>
      </MessageFooterContainer>
    </Container>
  );
};

export default MessageDetail;
