import 'swiper/css';
import 'swiper/css/pagination';
import './swiperCustom.css';

import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import type { Album } from '../../types/album';
import { MAIN_ALBUM_KEY } from '../../api/album';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { messageStore } from '../../stores/messageStore';
import * as S from './AlbumDetail.styled';

const AlbumDeatilImage = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const albumDatas = queryClient.getQueryData<any>(MAIN_ALBUM_KEY);
  const [thumsSwiper, setThumbsSwiper] = useState<any>(null);
  const setAlbumDetails = useSetAtom(albumDetailStore);
  const setIsActive = useSetAtom(messageStore);

  const handleActiveAlbumSave = (swiper: any) => {
    const currentImage = albumDatas?.pages
      .flatMap((page: any) => page.data.content)
      .filter((_: any, index: number) => index === swiper.activeIndex);

    setAlbumDetails(currentImage[0]);
    setIsActive((prev) => ({
      ...prev,
      isMessageOpen: currentImage[0].contentCheck,
      isSwiperCheck: prev.isSwiperCheck + 1,
    }));
  };

  return (
    <S.Container>
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumsSwiper && !thumsSwiper.destroyed ? thumsSwiper : null }}
        modules={[Thumbs, Navigation]}
        className="mySwiper"
        initialSlide={location.state.order}
        onSlideChange={handleActiveAlbumSave}
      >
        {albumDatas?.pages
          ?.flatMap((page: any) => page.data.content)
          .map((album: Album) => (
            <SwiperSlide key={album.image_Id}>
              <img src={album.accessUrl} alt={album.originName} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={2}
        slidesPerView="auto"
        centeredSlides
        modules={[Navigation, Thumbs]}
        slideToClickedSlide
        pagination={{
          clickable: true,
        }}
        className="mySwiper2"
        initialSlide={location.state.order}
      >
        {albumDatas?.pages
          ?.flatMap((page: any) => page.data.content)
          .map((album: Album) => (
            <SwiperSlide key={album.image_Id}>
              <img src={album.resizeUrl} alt={album.originName} />
            </SwiperSlide>
          ))}
      </Swiper>
    </S.Container>
  );
};

export default AlbumDeatilImage;
