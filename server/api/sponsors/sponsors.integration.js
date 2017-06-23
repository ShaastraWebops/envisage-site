'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSponsor;

describe('Sponsors API:', function() {
  describe('GET /api/sponsors', function() {
    var sponsors;

    beforeEach(function(done) {
      request(app)
        .get('/api/sponsors')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sponsors = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(sponsors).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/sponsors', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sponsors')
        .send({
          name: 'New Sponsor',
          info: 'This is the brand new sponsor!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSponsor = res.body;
          done();
        });
    });

    it('should respond with the newly created sponsor', function() {
      expect(newSponsor.name).to.equal('New Sponsor');
      expect(newSponsor.info).to.equal('This is the brand new sponsor!!!');
    });
  });

  describe('GET /api/sponsors/:id', function() {
    var sponsor;

    beforeEach(function(done) {
      request(app)
        .get(`/api/sponsors/${newSponsor._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sponsor = res.body;
          done();
        });
    });

    afterEach(function() {
      sponsor = {};
    });

    it('should respond with the requested sponsor', function() {
      expect(sponsor.name).to.equal('New Sponsor');
      expect(sponsor.info).to.equal('This is the brand new sponsor!!!');
    });
  });

  describe('PUT /api/sponsors/:id', function() {
    var updatedSponsor;

    beforeEach(function(done) {
      request(app)
        .put(`/api/sponsors/${newSponsor._id}`)
        .send({
          name: 'Updated Sponsor',
          info: 'This is the updated sponsor!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSponsor = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSponsor = {};
    });

    it('should respond with the updated sponsor', function() {
      expect(updatedSponsor.name).to.equal('Updated Sponsor');
      expect(updatedSponsor.info).to.equal('This is the updated sponsor!!!');
    });

    it('should respond with the updated sponsor on a subsequent GET', function(done) {
      request(app)
        .get(`/api/sponsors/${newSponsor._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let sponsor = res.body;

          expect(sponsor.name).to.equal('Updated Sponsor');
          expect(sponsor.info).to.equal('This is the updated sponsor!!!');

          done();
        });
    });
  });

  describe('PATCH /api/sponsors/:id', function() {
    var patchedSponsor;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/sponsors/${newSponsor._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Sponsor' },
          { op: 'replace', path: '/info', value: 'This is the patched sponsor!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSponsor = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSponsor = {};
    });

    it('should respond with the patched sponsor', function() {
      expect(patchedSponsor.name).to.equal('Patched Sponsor');
      expect(patchedSponsor.info).to.equal('This is the patched sponsor!!!');
    });
  });

  describe('DELETE /api/sponsors/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/sponsors/${newSponsor._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sponsor does not exist', function(done) {
      request(app)
        .delete(`/api/sponsors/${newSponsor._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
