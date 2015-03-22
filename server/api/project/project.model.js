'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String
 
});

module.exports = mongoose.model('Project', ProjectSchema);