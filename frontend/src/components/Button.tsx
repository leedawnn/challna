import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
`;

export default function Button({ children }: Props) {
  return (
    <StyledButton type="button"> {children} </StyledButton>
  )
}