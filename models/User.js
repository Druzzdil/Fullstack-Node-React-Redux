
const mongoose = require('mongoose');
const { Schema } = mongoose;
// let { keys } = require('../config/keys');

const UserSchema = new Schema({
    googleID: String
});

mongoose.model('user', UserSchema);