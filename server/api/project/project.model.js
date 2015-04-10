'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  number: {type: String, default: 'yeah'}
 
});

module.exports = mongoose.model('Project', ProjectSchema);