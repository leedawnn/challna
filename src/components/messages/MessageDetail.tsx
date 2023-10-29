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
  const MessageItem = location.state;
  const ImageItem = MessageItem.boardImageViewDtoList;
  return (
    <Container>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        modules={[Pagination]}
        className="mainSwiper"
      >
        {ImageItem?.map((List: any) => {
          return (
            <div>
              <SwiperSlide>
                <img
                  src={List.accessUrl}
                  alt={List.originName}
                  style={{ width: '500px', height: '375px', alignItems: 'center' }}
                />
              </SwiperSlide>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          );
        })}
      </Swiper>
      <div className="swiper-pagination" />
      <MessageContentsContainer>
        <MessageContent>
          <ContentText>{MessageItem.content}</ContentText>
        </MessageContent>
      </MessageContentsContainer>
      <MessageFooterContainer>
        <MessageFooter>
          <FooterText> {MessageItem.dateTime}</FooterText>
        </MessageFooter>
      </MessageFooterContainer>
    </Container>
  );
};

export default MessageDetail;
