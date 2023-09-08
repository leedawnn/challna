import axios from 'axios';
import { rest } from 'msw';

interface Data {
  grant_type: string;
  client_id: string;
  code: string;
  [key: string]: string;
}

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
          message: "성공하였습니다."
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
