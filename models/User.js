import mongoose, { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
})

module.exports = mongoose.models.User || model('User', UserSchema);