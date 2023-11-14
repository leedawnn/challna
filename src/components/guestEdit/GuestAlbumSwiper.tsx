import 'swiper/css';
import './guestAlbumSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import { useAtom } from 'jotai';
import CircleDeleteIcon from '../../assets/icons/CircleDeleteIcon';
import { guestFileStore } from '../../stores/guestStore';

const GuestAlbumSwiper = () => {
  const [guestAlbum, setGuestAlbum] = useAtom(guestFileStore);

  const handleAlbumDelete = (evt: React.MouseEvent<SVGElement>) => {
    const deleteTarget = evt.currentTarget;

    setGuestAlbum((prev: any) => prev?.filter((file: any) => file.id !== +deleteTarget.id));
  };

  return (
    <Container>
      <Swiper slidesPerView="auto" centeredSlides spaceBetween={20} className="guestSwiper">
        {guestAlbum?.map((album) => (
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

  padding: 20px 20px 30px 20px;

  box-sizing: border-box;
`;
