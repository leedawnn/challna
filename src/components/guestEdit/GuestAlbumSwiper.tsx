import 'swiper/css';
import './guestAlbumSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import { useAtom } from 'jotai';
import CircleDeleteIcon from '../../assets/icons/CircleDeleteIcon';
import type { GuestFile } from '../../types/album';
import { guestAlbumStore } from '../../stores/guestStore';

const GuestAlbumSwiper = () => {
  const [guestAlbum, setGuestAlbum] = useAtom(guestAlbumStore);

  const handleAlbumDelete = (evt: React.MouseEvent<SVGElement>) => {
    const deleteTarget = evt.currentTarget;

    setGuestAlbum((prev) => ({
      ...prev,
      images: prev?.images!.filter((file: GuestFile) => file.id !== +deleteTarget.id),
    }));
  };

  return (
    <Container>
      <Swiper slidesPerView={1.2} centeredSlides spaceBetween={20} className="guestSwiper">
        {guestAlbum.images?.map((album) => (
          <SwiperSlide key={album.id}>
            <CircleDeleteIcon
              onClick={handleAlbumDelete}
              style={{ position: 'absolute', top: '8px', right: '10px', cursor: 'pointer' }}
              id={`${album.id}`}
            />
            <img src={album.previewUrl} alt={album.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GuestAlbumSwiper;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 257px);

  padding: 20px 20px 30px 0;

  box-sizing: border-box;
`;
