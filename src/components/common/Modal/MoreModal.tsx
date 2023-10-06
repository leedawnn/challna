import { MouseEventHandler } from 'react';
import { useAtomValue } from 'jotai';
import * as S from './Modal.styled';

import DeleteIcon from '../../../assets/icons/DeleteIcon';
import { HTTP_STATUS } from '../../../constants/api';
import { accessTokenStore } from '../../../stores/accessToken';
import { albumDetailStore } from '../../../stores/albumDetailStore';
import { deleteAlbumImage } from '../../../api/album';

/**
 *
 * MessageMenuModal은 메시지 탭에서 더보기(...) 버튼에 연결하는 모달입니다.
 *
 * props로 isModalOpen에 해당하는 boolean이 필요하며, createPortal을 사용하여야합니다.
 *
 * @example
 * ts`
 *  {isModalOpen && createPortal(<MessageMenuModal은 isModalOpen={isModalOpen} />, document.body)}
 * `;
 */

type Props = {
  handleChangeVisible: () => void;
};

const MoreModal = ({ handleChangeVisible }: Props) => {
  const accessToken = useAtomValue(accessTokenStore);
  const albumImage = useAtomValue(albumDetailStore);

  const handleMessageDelete = async () => {
    try {
      const response = await deleteAlbumImage(accessToken as string, albumImage?.boardId as any as string);
      if (response.status === HTTP_STATUS.OK) {
        handleChangeVisible();
      }
    } catch {
      throw new Error('에러 발생');
    }
  };

  const handlePreventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <S.BackdropLayout onClick={handleChangeVisible}>
      <S.ModalContainer onClick={handlePreventCloseModal}>
        <S.MoreDeleteWrapper onClick={handleMessageDelete}>
          <DeleteIcon active />
          <S.MoreDeleteText>삭제</S.MoreDeleteText>
        </S.MoreDeleteWrapper>
      </S.ModalContainer>
    </S.BackdropLayout>
  );
};

export default MoreModal;
