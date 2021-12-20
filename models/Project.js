import { model, Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: {type: String, required},
})

module.exports = model('Project', ProjectSchema);