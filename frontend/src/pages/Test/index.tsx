import { useState } from 'react';
import MessageMenuModal from '../../components/common/modal/MessageMenuModal';

const TestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen((prev) => !prev);
  };

  console.log(isModalOpen);

  return (
    <>
      <div>Modal 테스트 페이지!</div>
      <button onClick={handleDelete}>삭제</button>
      {isModalOpen && <MessageMenuModal isModalOpen={isModalOpen} />}
    </>
  );
};

export default TestPage;
