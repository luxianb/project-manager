import {compareSync, genSaltSync} from 'bcrypt';
import dbConnect from "../../../lib/dbConnect";
import User from '../../../models/User';

export default async function handler (res, req) {
  const {method, body} = req;

  await dbConnect()

  switch(method) {
    case 'POST':
      try {
        const userFound = User.findOne({email: body.email})

        if (userFound) {
          const passwordMatched = compareSync(body.password, userFound.password);
          if (passwordMatched) {
            // Auth user

          }
        }
        
        return res.status(401).json({success: false})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    default: return res.status(400).json({success: false}); 
  }
}