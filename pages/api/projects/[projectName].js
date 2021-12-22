import dbConnect from "../../../lib/dbConnect";
import Project from '../../../models/Project';
import { fetchProjectInfo } from "../../../src/util/apiFunctions";

export default async function handler (req, res) {
  const {method, query} = req;

  await dbConnect()

  switch(method) {
    case 'GET':
      try {
        const project = await Project.findOne({slug: query.projectName})
        // console.log(project);
        const projectInfo = await fetchProjectInfo(project.trelloId);
        // console.log(projectInfo);

        return res.status(200).json({success: true, data: projectInfo})
      } catch (error) {
        return res.status(400).json({success: false})
      }

    case 'PUT':
      try {
        const updatedProject = await Project.findOneAndUpdate(
          {slug: query.projectName},
          {$set: req.body},
          {new: true}
        );
        return res.status(201).json({success: true, data: updatedProject})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    case 'DELETE':
      try {
        const updatedProject = await Project.findOneAndUpdate(
          {slug: query.projectName},
          {$set: req.body},
          {new: true}
        );
        return res.status(201).json({success: true, data: updatedProject})
      } catch (error) {
        return res.status(400).json({success: false})
      }
    default: return res.status(400).json({success: false}); 
  }
}