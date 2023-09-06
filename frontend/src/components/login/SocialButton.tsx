import KAKAO_LOGO from '../../assets/kakao_login.png';
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
    <Button socialImg={logo} type="button" />
  );
}

export default SocialButton;

const Button = styled.button<{ socialImg: string }>`
  all: unset;

  width: 335px;
  height: 50px;
  margin: 0 20px;

  background-image: url(${props => props.socialImg});
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;
`;