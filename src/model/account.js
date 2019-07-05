import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose'; // can do Facebook and Google login too

let Account = new Schema({
  email: String,
  password: String,
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);
