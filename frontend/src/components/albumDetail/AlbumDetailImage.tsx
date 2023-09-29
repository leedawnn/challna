import 'swiper/css';
import 'swiper/css/pagination';
import './swiperCustom.css';

import * as S from './AlbumDetail.styled';

import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MAIN_ALBUM_KEY } from '../../api/album';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const AlbumDeatilImage = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [thumsSwiper, setThumbsSwiper] = useState<any>(null);
  const { pages }: any = queryClient.getQueryData(MAIN_ALBUM_KEY);

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
          onSlideChange={() => console.log('test')}
        >
          {pages
            ?.flatMap((page: any) => page.data.content)
            .map((item: any, index: number) => (
              <SwiperSlide key={item.id || index}>
                <img src={item.accessUrl} alt={item.originName} />
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
            .map((item: any, index: number) => (
              <SwiperSlide key={item.id || index}>
                <img src={item.accessUrl} alt={item.originName} />
              </SwiperSlide>
            ))}
        </Swiper>
      </S.Container>
    </>
  );
};

export default AlbumDeatilImage;
