import withSession from "../../lib/session";

export default withSession(
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({isLoggedIn: false})
  }
);