import { MouseEventHandler, useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { useLocation } from 'react-router-dom';
import * as S from './Modal.styled';

import DeleteIcon from '../../../assets/icons/DeleteIcon';
import { HTTP_STATUS } from '../../../constants/api';
import { accessTokenStore } from '../../../stores/accessToken';
import { albumDetailStore } from '../../../stores/albumDetailStore';
import { deleteBoardData } from '../../../api/album';
import { getDeleteUrl } from '../../../utils';

type Props = {
  handleChangeVisible: () => void;
};

const MoreModal = ({ handleChangeVisible }: Props) => {
  const { pathname } = useLocation();
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetailInfo = useAtomValue(albumDetailStore);

  const handleDeleteBoardData = useCallback(async () => {
    if (!accessToken || !albumDetailInfo?.image_Id) return;

    try {
      const url = getDeleteUrl(pathname, albumDetailInfo.image_Id);
      const response = await deleteBoardData(accessToken, url);
      if (response.status === HTTP_STATUS.OK) {
        handleChangeVisible();
      }
    } catch {
      // 에러 처리 부분 추가 필요
      throw new Error('에러 발생');
    }
  }, [accessToken, albumDetailInfo]);

  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <S.BackdropLayout onClick={handleChangeVisible}>
      <S.ModalContainer onClick={handlePreventCloseModal}>
        <S.MoreDeleteWrapper onClick={handleDeleteBoardData}>
          <DeleteIcon active />
          <S.MoreDeleteText>삭제</S.MoreDeleteText>
        </S.MoreDeleteWrapper>
      </S.ModalContainer>
    </S.BackdropLayout>
  );
};

export default MoreModal;
