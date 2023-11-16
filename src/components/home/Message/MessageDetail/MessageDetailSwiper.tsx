import 'swiper/css';
import 'swiper/css/pagination';
import './messageSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import styled from 'styled-components';
import type { Album } from '../../../../types/album';

type Props = {
  messageDetailImages: Pick<Album, 'accessUrl' | 'imageId' | 'metaDateTime' | 'originName'>[];
};

const MessageDetailSwiper = ({ messageDetailImages }: Props) => {
  return (
    <Cotainer>
      <Swiper pagination modules={[Pagination]} className="messageSwiper">
        {messageDetailImages.map((image) => (
          <SwiperSlide key={image.imageId}>
            <img src={image.accessUrl} alt={image.originName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Cotainer>
  );
};

export default MessageDetailSwiper;

const Cotainer = styled.div`
  width: 100%;

  max-height: 568px;
  height: 100%;

  box-sizing: border-box;
`;
