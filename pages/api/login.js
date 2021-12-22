import {compare} from 'bcrypt';
import { withIronSessionApiRoute } from 'iron-session/next';
import dbConnect from '../../lib/dbConnect';
import withSession from '../../lib/session';
import User from '../../models/User';

export default withSession(
  async function loginRoute(req, res) {
    const { email, password } = await req.body;
    try {
      await dbConnect();
      const user = await User.findOne({email: email.toLowerCase()});
      if (!user) { return res.status(401).json({message: "User not found"})};
      const passwordValid = await compare(password, user.password);

      if (passwordValid) {
        req.session.user = {id: user._id, email: user.email}
        console.log(req.session.user);
        await req.session.save();
        res.json(user);
      }
    } catch(error) {
      console.log(error);
      res.status(error?.response?.status || 500).json(error.data);
    }
  })
