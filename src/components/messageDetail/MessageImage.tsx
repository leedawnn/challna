import 'swiper/css';
import 'swiper/css/pagination';
import './messageSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import * as S from './MessageDetail.styled';

import type { Album } from '../../types/album';

type Props = {
  messageDetailImages: Pick<Album, 'accessUrl' | 'imageId' | 'metaDateTime' | 'originName'>[];
};

const MessageImage = ({ messageDetailImages }: Props) => {
  return (
    <S.Cotainer>
      <Swiper pagination modules={[Pagination]} className="messageSwiper">
        {messageDetailImages.map((image) => (
          <SwiperSlide key={image.imageId}>
            <img src={image.accessUrl} alt={image.originName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Cotainer>
  );
};

export default MessageImage;
