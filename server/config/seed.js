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
          info: 'Description 1'
        },
        {
          name: '3D Waterfall',
          info: 'Description 2'
        },
        {
          name: 'Speed Painting Bots',
          info: 'Description 3'
        },
        {
          name: 'Virtual Instruments',
          info: 'Description 4'
        },
        {
          name: 'Laser Show',
          info: 'Description 5'
        },
        {
          name: 'Projection Mapping',
          info: 'Description 6'
        },
        {
          name: 'Dance Dance Revoultion',
          info: 'Description 7'
        },
        {
          name: 'Interactive LED Table',
          info: 'Description 8'
        },
        {
          name: 'Face Sketching Bot',
          info: 'Description 9'
        })
        .then(() => console.log('finished populating projects'))
        .catch(err => console.log('error populating projects', err));
      });
    Prevproject.find({}).remove()
      .then(() => {
        Prevproject.create({
          name: 'something random',
          info: 'some info'
        })
        .then(() => console.log('finished populating prevprojects'))
        .catch(err => console.log('error populating prevprojects', err));
      });
    Sponsor.find({}).remove()
      .then(() => {
        Prevproject.create({
          name: 'A sponsor',
          info: 'about'
        })
        .then(() => console.log('finished populating sponsors'))
        .catch(err => console.log('error populating sponsors', err));
      });
    News.find({}).remove()
      .then(() => {
        News.create({
          name: 'News item',
          info: 'breaking news'
        })
        .then(() => console.log('finished populating news'))
        .catch(err => console.log('error populating news', err));
      });
  }
}
