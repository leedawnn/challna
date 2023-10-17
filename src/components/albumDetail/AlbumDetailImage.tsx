import 'swiper/css';
import 'swiper/css/pagination';
import './swiperCustom.css';

import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import * as S from './AlbumDetail.styled';

import { accessTokenStore } from '../../stores/accessToken';
import { activeSliderStore } from '../../stores/activeSliderStore';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { messageStore } from '../../stores/messageStore';
import useInfinityAlbum from '../../hooks/useInfinityAlbum';
import useIntersectionObserver from '../../hooks/useInfinityObserver';

const AlbumDeatilImage = () => {
  const accessToken = useAtomValue(accessTokenStore);
  const { data: albumDetailData, fetchNextPage, hasNextPage } = useInfinityAlbum(accessToken!);
  const [thumsSwiper, setThumbsSwiper] = useState<any>(null);
  const activeSlider = useAtomValue(activeSliderStore);
  const setAlbumDetails = useSetAtom(albumDetailStore);
  const setIsActive = useSetAtom(messageStore);
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleActiveAlbumSave = (swiper: any) => {
    const currentImage: any = albumDetailData?.pages.filter((_: any, index: number) => index === swiper.activeIndex);

    setAlbumDetails({ ...currentImage[0], activeIndex: swiper.activeIndex });
    setIsActive((prev) => ({
      ...prev,
      isMessageOpen: currentImage[0]?.contentCheck,
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
        initialSlide={activeSlider}
        onSlideChange={handleActiveAlbumSave}
        onSlidesLengthChange={handleActiveAlbumSave}
      >
        {albumDetailData?.pages?.map((album: any) => (
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
        initialSlide={activeSlider}
      >
        {albumDetailData?.pages.map((album: any, index: number) => (
          <SwiperSlide key={album.image_Id}>
            <img src={album.resizeUrl} alt={album.originName} />
            {albumDetailData.pages.length - 3 === index && <div ref={setTarget} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default AlbumDeatilImage;
