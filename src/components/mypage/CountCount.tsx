import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import * as S from './Profile.styled';

import { USER_BOARD_COUNT, getUserBoardCount } from '../../api/mypage';

import { userStore } from '../../stores/userStore';

const ContentCount = () => {
  const user = useAtomValue(userStore)!;
  const { data: countData } = useQuery(USER_BOARD_COUNT, () => getUserBoardCount(user?.accessToken));

  return (
    <>
      <S.ContnetCounterWrapper>
        <S.CountText> {countData?.data.messageCount} </S.CountText>
        <S.CountTitleText> 메시지 </S.CountTitleText>
      </S.ContnetCounterWrapper>
      <S.ContnetCounterWrapper>
        <S.CountText> {countData?.data.imageCount} </S.CountText>
        <S.CountTitleText> 이미지 </S.CountTitleText>
      </S.ContnetCounterWrapper>
    </>
  );
};

export default ContentCount;
