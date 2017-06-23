/**
 * Sponsors model events
 */

'use strict';

import {EventEmitter} from 'events';
var SponsorsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SponsorsEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Sponsor) {
  for(var e in events) {
    let event = events[e];
    Sponsor.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    SponsorsEvents.emit(`${event}:${doc._id}`, doc);
    SponsorsEvents.emit(event, doc);
  };
}

export {registerEvents};
export default SponsorsEvents;
