import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DeleteModal from '../../components/common/modal/DeleteModal';
import MessageMenuModal from '../../components/common/modal/MessageMenuModal';

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
      <button onClick={handleDelete}>삭제</button>
      {isModalOpen &&
        createPortal(<MessageMenuModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />, document.body)}
    </>
  );
};

export default TestPage;
