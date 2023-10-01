import 'swiper/css';
import 'swiper/css/pagination';
import './swiperCustom.css';

import * as S from './AlbumDetail.styled';

import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Album } from '../../types/album';
import { MAIN_ALBUM_KEY } from '../../api/album';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

const AlbumDeatilImage = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [thumsSwiper, setThumbsSwiper] = useState<any>(null);
  const { pages }: any = queryClient.getQueryData(MAIN_ALBUM_KEY);
  const setAlbumDetails = useSetAtom(albumDetailStore);

  const handleActiveAlbumSave = (swiper: any) => {
    const currentImage = pages
      .flatMap((page: any) => page.data.content)
      .filter((_: any, index: number) => index === swiper.activeIndex);

    setAlbumDetails(currentImage[0]);
  };

  return (
    <>
      <S.Container>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumsSwiper && !thumsSwiper.destroyed ? thumsSwiper : null }}
          modules={[Thumbs, Navigation]}
          className="mySwiper"
          initialSlide={location.state.order}
          onSlideChange={handleActiveAlbumSave}
        >
          {pages
            ?.flatMap((page: any) => page.data.content)
            .map((album: Album, index: number) => (
              <SwiperSlide key={album.id || index} accessKey="hi">
                <img src={album.accessUrl} alt={album.originName} />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView="auto"
          centeredSlides={true}
          modules={[Navigation, Thumbs]}
          slideToClickedSlide={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper2"
          initialSlide={location.state.order}
        >
          {pages
            ?.flatMap((page: any) => page.data.content)
            .map((album: Album, index: number) => (
              <SwiperSlide key={album.id || index}>
                <img src={album.resizeUrl} alt={album.originName} />
              </SwiperSlide>
            ))}
        </Swiper>
      </S.Container>
    </>
  );
};

export default AlbumDeatilImage;
