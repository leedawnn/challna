export const ROUTES_PATH = {
  main: '/',
  login: '/login',
  redirect: '/login/oauth2/callback/kakao',
  message: '/message',
  messageDetail: '/message/details/:id',
  mypage: '/mypage',
  albumDetail: '/album/details',
} as const;
