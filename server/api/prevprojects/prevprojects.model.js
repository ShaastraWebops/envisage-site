'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './prevprojects.events';

var PrevprojectSchema = new mongoose.Schema({
  name: String,
  info: String,
  pictures: [{type: String}]
});

registerEvents(PrevprojectSchema);
export default mongoose.model('Prevproject', PrevprojectSchema);
