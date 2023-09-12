import styled from 'styled-components';

const DeleteModal = () => {
  return <Layout></Layout>;
};

export default DeleteModal;

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;

  left: 0;
  bottom: 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: calc(var(--vh) * 12.3);
`;
