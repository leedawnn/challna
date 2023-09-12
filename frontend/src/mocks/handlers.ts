import { rest } from 'msw';

export const handlers = () => {
  return [...userHandlers];
}

const userHandlers = [
  rest.post('/login/kakao', async (req, res, ctx) => {
    const { code } = await req.json();

    if (typeof code === 'string' && code) {
      return res(
        ctx.status(200),
        ctx.json({
          id: null,
          kakaoId: 12345678,
          email: "test@moment.com",
          kakaoName: "test",
          profile_image: "image_url"
        })
      )
    }

    return res(
      ctx.status(401),
      ctx.json({
        errorMessage: "코드를 확인해보세요."
      })
    )
  })
]
