export type AuthToken = {
  accessToken: string;
  accessTokenExpireDate: string;
  refreshToken: string;
}

export type User = AuthToken & {
  kakaoId: number;
  email: string;
  kakaoName: string;
  profile_image: string;
}