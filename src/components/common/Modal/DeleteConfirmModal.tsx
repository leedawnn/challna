import { MouseEventHandler, useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { useLocation } from 'react-router-dom';
import * as S from './Modal.styled';

import { HTTP_STATUS } from '../../../constants/api';
import { accessTokenStore } from '../../../stores/accessToken';
import { albumDetailStore } from '../../../stores/albumDetailStore';
import { deleteBoardData } from '../../../api/album';
import { getDeleteUrl } from '../../../utils';

type Props = {
  handleChangeVisible: () => void;
};

const DeleteConfirmModal = ({ handleChangeVisible }: Props) => {
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetailInfo = useAtomValue(albumDetailStore);
  const { pathname } = useLocation();

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
        <S.DeleteConfirmWrapper>
          <S.DeleteConfirmTitle>정말 삭제 하시겠습니까?</S.DeleteConfirmTitle>
          <S.DeleteConfirmButton onClick={handleDeleteBoardData}>삭제</S.DeleteConfirmButton>
          <S.DeleteCancelButton onClick={handleChangeVisible}>취소</S.DeleteCancelButton>
        </S.DeleteConfirmWrapper>
      </S.ModalContainer>
    </S.BackdropLayout>
  );
};

export default DeleteConfirmModal;
