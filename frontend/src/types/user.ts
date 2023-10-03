export type AuthToken = {
  accessToken: string;
  accessTokenExpireDate: Date;
  refreshToken: string;
};

export type User = AuthToken & {
  kakaoId: number;
  email: string;
  kakaoName: string;
  profile_image: string;
};
