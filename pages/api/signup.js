import {hash, genSalt} from 'bcrypt';
import dbConnect from "../../lib/dbConnect";
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect()

  switch(req.method) {
    case 'POST':
      try {
        console.log(req.body)
        req.body.password = await hash(req.body.password, 10);
        const user = await User.create(req.body)
        
        return res.status(201).json({success: true, data: user})
      } catch (error) {
        console.log(error)
        return res.status(400).json({success: false})
      }
    default: return res.status(400).json({success: false}); 
  }
}
