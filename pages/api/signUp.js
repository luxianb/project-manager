import {hash, genSalt} from 'bcrypt';
import dbConnect from "../../lib/dbConnect";
import User from '../../models/User';

export default async function handler(res, req) {
  await dbConnect()

  switch(req.method) {
    case 'POST':
      try {
        req.body.password = await hash(req.body.password, genSalt(10));
        const user = await User.create(req.body)
        
        return res.status(201).json({success: true, data: user})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    default: return res.status(400).json({success: false}); 
  }
}