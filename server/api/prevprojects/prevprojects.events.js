/**
 * Prevprevprojects model events
 */

'use strict';

import {EventEmitter} from 'events';
var PrevprojectsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PrevprojectsEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Prevproject) {
  for(var e in events) {
    let event = events[e];
    Prevproject.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    PrevprojectsEvents.emit(`${event}:${doc._id}`, doc);
    PrevprojectsEvents.emit(event, doc);
  };
}

export {registerEvents};
export default PrevprojectsEvents;
