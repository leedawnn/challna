import 'swiper/css';
import './guestAlbumSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import { useAtomValue } from 'jotai';
import { guestFileStore } from '../../stores/guestStore';

const GuestAlbumSwiper = () => {
  const guestAlbum = useAtomValue(guestFileStore);

  return (
    <Container>
      <Swiper slidesPerView="auto" centeredSlides spaceBetween={20} className="guestSwiper">
        {guestAlbum?.map((album) => (
          <SwiperSlide key={album.id}>
            <img src={album.previewUrl} alt={album.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GuestAlbumSwiper;

const Container = styled.div`
  padding: 20px 20px 30px 20px;

  box-sizing: border-box;
`;
