/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import config from './environment/';
import Project from '../api/projects/projects.model';
import Prevproject from '../api/prevprojects/prevprojects.model';
import News from '../api/news/news.model';
import Sponsor from '../api/sponsors/sponsors.model';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });

    Project.find({}).remove()
      .then(() => {
        Project.create({
          name: 'Multi-Colored Persistence of Vision',
          info: 'Description 1',
          image: 'pov.jpg'
        },
        {
          name: '3D Waterfall',
          info: 'Description 2',
          image: 'waterfall.png'
        },
        {
          name: 'Speed Painting Bots',
          info: 'Description 3',
          image: 'painting.jpg'
        },
        {
          name: 'Virtual Instruments',
          info: 'Description 4',
          image: 'virtual.jpg'
        },
        {
          name: 'Laser Show',
          info: 'Description 5',
          image: 'laser.jpg'
        },
        {
          name: 'Projection Mapping',
          info: 'Description 6',
          image: 'mapping.jpg'
        },
        {
          name: 'Dance Dance Revoultion',
          info: 'Description 7',
          image: 'ddr.png'
        },
        {
          name: 'Interactive LED Table',
          info: 'Description 8',
          image: 'table.png'
        },
        {
          name: 'Face Sketching Bot',
          info: 'Description 9',
          image: 'sketch.jpg'
        })
        .then(() => console.log('finished populating projects'))
        .catch(err => console.log('error populating projects', err));
      });
      
    Prevproject.find({}).remove()
      .then(() => {
        Prevproject.create({
          name: 'Persistence of Vision',
          info: 'some info',
          image: 'pov.jpg'
        },
        {
          name: 'Virtual Instruments',
          info: 'some info',
          image: 'virtual.jpg'
        },
        {
          name: 'Fighting Gravity',
          info: 'some info',
          image: 'gravity.JPG'
        },
        {
          name: '3D Waterfall',
          info: 'some info',
          image: 'waterfall.png'
        },
        {
          name: 'Kinect based DJ',
          info: 'some info',
          image: 'kinect.JPG'
        },
        {
          name: 'Free illusion and light suits',
          info: 'some info',
          image: 'illusion.jpg'
        },
        {
          name: 'Multi user interactive interfaces (Kinect)',
          info: 'some info',
          image: 'uii.JPG'
        },
        {
          name: 'WireMap',
          info: 'some info',
          image: 'wiremap.png'
        },
        {
          name: '3D Hologram',
          info: 'some info',
          image: 'hologram.jpg'
        },
        {
          name: 'Light and sound',
          info: 'some info',
          image: 'light.png'
        },
        {
          name: 'Minion Dance',
          info: 'some info',
          image: 'minion.jpg'
        },
        {
          name: 'Shadow Dance',
          info: 'some info',
          image: 'shadow.jpg'
        })
        .then(() => console.log('finished populating prevprojects'))
        .catch(err => console.log('error populating prevprojects', err));
      });
  }
}
