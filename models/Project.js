import mongoose, { model, Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: {type: String, required: true},
})

module.exports = mongoose.models.Project || model('Project', ProjectSchema);