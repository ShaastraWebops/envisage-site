'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/envisage-dev'
    uri: 'mongodb://' + process.env.ENVIDEV_USER + ':' + process.env.ENVIDEV_PASSWORD + '@localhost/envisage'
  },

  // Seed database on startup
  seedDB: true

};
