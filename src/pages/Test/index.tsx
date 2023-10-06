import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';
import DeletePhotoModal from '../../components/common/Modal/DeleteConfirmModal';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      <div>Modal 테스트 페이지!</div>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
      {isModalOpen &&
        createPortal(<DeletePhotoModal isModalOpen={isModalOpen} handleChangeVisible={handleDelete} />, document.body)}
    </>
  );
};

export default TestPage;
