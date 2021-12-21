// import { withIronSession } from 'iron-session';
import { withIronSessionApiRoute, ironO } from 'iron-session/next'

export default function withSession(handler) {
  return withIronSessionApiRoute(handler, {
    cookieName: 'hpm_cookie',
    password: process.env.TOKEN_SECRET,
    cookieOptions: {
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      },
    },
  })
}