export const ROUTES_PATH = {
  main: '/',
  login: '/login',
  redirect: '/login/oauth2/callback/kakao',
  message: '/message',
  messageDetail: '/message/:id',
  // messageDetail: '/message/details',
  mypage: '/mypage',
  albumDetail: '/album/details',
} as const;
