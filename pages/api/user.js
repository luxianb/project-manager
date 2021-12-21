import { withIronSessionApiRoute } from "iron-session/next";
import withSession from '../../lib/session';

export default withSession(
  function userRoute(req, res) {
    if (req.session.user) {
      res.json({...req.session.user, isLoggedIn: true});
    } else {
      res.json({isLoggedIn: false})
    }
  }
);
