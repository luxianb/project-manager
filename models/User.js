import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {type: String, required, unique},
  password: {type: String, required},
})

module.exports = model('User', UserSchema);