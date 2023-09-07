import KAKAO_LOGO from '../../assets/kakao_login.svg';
import { styled } from "styled-components";

type Props = {
  socialType: keyof typeof SOCIAL_OBJ;
}

const SOCIAL_OBJ = {
  kakao: {
    logo: KAKAO_LOGO,
  }
} as const;

const SocialButton = ({ socialType }: Props) => {
  const { logo } = SOCIAL_OBJ[socialType];

  return (
    <Button type="button">
      <img src={logo} alt={`${socialType}_logo`} width="100%" />
    </Button>
  );
}

export default SocialButton;

const Button = styled.button`
  all: unset;

  width: calc(100% - 48px);
  height: 50px;
  margin: 0 24px;

  background-color: var(--kakao-color);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  
  cursor: pointer;

  & > img {
    width: max-content;
    height: 100%;
    
    object-fit: contain;
    border-radius: 10px;
  }
`;