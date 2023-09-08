import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    console.log(req);
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),
  rest.get('/user', (req, res, ctx) => {
    console.log(req);
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
  rest.post('/login/kakao', (req, res, ctx) => {
    const { code } = req.body;

    if (typeof code === 'string') {
      return res(
        ctx.status(200),
        ctx.json({
          message: "성공하였습니다."
        })
      )
    }

    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: "잘못된 접근입니다."
      })
    )
  })
];
