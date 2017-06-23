'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './news.events';

var NewsSchema = new mongoose.Schema({
  name: String,
  info: String
});

registerEvents(NewsSchema);
export default mongoose.model('News', NewsSchema);
