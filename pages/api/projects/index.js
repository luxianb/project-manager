import dbConnect from "../../../lib/dbConnect";
import Project from '../../../models/Project';

export default async function handler(req, res) {
  const {method} = req;

  await dbConnect()

  switch(method) {
    case 'GET':
      try {
        const projects = await Project.find({})
        return res.status(200).json({success: true, data: projects})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    case 'POST':
      try {
        const project = await Project.create(req.body)
        return res.status(201).json({success: true, data: project})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    default: return res.status(400).json({success: false}); 
  }
}