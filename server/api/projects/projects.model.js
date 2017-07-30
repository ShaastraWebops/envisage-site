'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import {registerEvents} from './projects.events';

var ProjectSchema = new mongoose.Schema({
  name: String,
  info: String,
  image: String,
  picture: String,
  team_lead: [{
    type: Schema.Types.ObjectId,
    ref: "User"	
  }],
  team_mentors: [{
  	type: Schema.Types.ObjectId,
  	ref: "User"
  }],
  team_members: [{
  	type: Schema.Types.ObjectId,
  	ref: "User"
  }]
});

registerEvents(ProjectSchema);
export default mongoose.model('Project', ProjectSchema);
