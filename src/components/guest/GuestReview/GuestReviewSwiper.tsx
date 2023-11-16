import 'swiper/css';
import 'swiper/css/pagination';
import './guestReviewSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { useAtomValue } from 'jotai';
import { guestAlbumStore } from '../../../stores/guestStore';

const GuestReviewSwiper = () => {
  const guestAlbum = useAtomValue(guestAlbumStore);

  return (
    <Container>
      <Swiper pagination modules={[Pagination]} className="reviewSwiper" slidesPerView="auto">
        {guestAlbum?.images?.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.previewUrl} alt={image.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GuestReviewSwiper;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 326px);

  box-sizing: border-box;
`;
