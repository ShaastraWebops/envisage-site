'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './sponsors.events';

var SponsorSchema = new mongoose.Schema({
  name: String,
  info: String
});

registerEvents(SponsorSchema);
export default mongoose.model('Sponsor', SponsorSchema);
