'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './projects.events';

var ProjectSchema = new mongoose.Schema({
  name: String,
  info: String
});

registerEvents(ProjectSchema);
export default mongoose.model('Project', ProjectSchema);