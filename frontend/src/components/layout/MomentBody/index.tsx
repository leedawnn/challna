import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const MomentBody = ({ children }: Props) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default MomentBody;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 37.5rem;
  min-height: 100vh;
  height: 100vh;
  
  background-color: #fff;
  box-sizing: border-box;
`;
