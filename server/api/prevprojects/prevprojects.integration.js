'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newPrevproject;

describe('Prevprojects API:', function() {
  describe('GET /api/prevprojects', function() {
    var prevprojects;

    beforeEach(function(done) {
      request(app)
        .get('/api/prevprojects')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          prevprojects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(prevprojects).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/prevprojects', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/prevprojects')
        .send({
          name: 'New Prevproject',
          info: 'This is the brand new prevproject!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPrevproject = res.body;
          done();
        });
    });

    it('should respond with the newly created prevproject', function() {
      expect(newPrevproject.name).to.equal('New Prevproject');
      expect(newPrevproject.info).to.equal('This is the brand new prevproject!!!');
    });
  });

  describe('GET /api/prevprojects/:id', function() {
    var prevproject;

    beforeEach(function(done) {
      request(app)
        .get(`/api/prevprojects/${newPrevproject._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          prevproject = res.body;
          done();
        });
    });

    afterEach(function() {
      prevproject = {};
    });

    it('should respond with the requested prevproject', function() {
      expect(prevproject.name).to.equal('New Prevproject');
      expect(prevproject.info).to.equal('This is the brand new prevproject!!!');
    });
  });

  describe('PUT /api/prevprojects/:id', function() {
    var updatedPrevproject;

    beforeEach(function(done) {
      request(app)
        .put(`/api/prevprojects/${newPrevproject._id}`)
        .send({
          name: 'Updated Prevproject',
          info: 'This is the updated prevproject!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPrevproject = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPrevproject = {};
    });

    it('should respond with the updated prevproject', function() {
      expect(updatedPrevproject.name).to.equal('Updated Prevproject');
      expect(updatedPrevproject.info).to.equal('This is the updated prevproject!!!');
    });

    it('should respond with the updated prevproject on a subsequent GET', function(done) {
      request(app)
        .get(`/api/prevprojects/${newPrevproject._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let prevproject = res.body;

          expect(prevproject.name).to.equal('Updated Prevproject');
          expect(prevproject.info).to.equal('This is the updated prevproject!!!');

          done();
        });
    });
  });

  describe('PATCH /api/prevprojects/:id', function() {
    var patchedPrevproject;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/prevprojects/${newPrevproject._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Prevproject' },
          { op: 'replace', path: '/info', value: 'This is the patched prevproject!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPrevproject = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPrevproject = {};
    });

    it('should respond with the patched prevproject', function() {
      expect(patchedPrevproject.name).to.equal('Patched Prevproject');
      expect(patchedPrevproject.info).to.equal('This is the patched prevproject!!!');
    });
  });

  describe('DELETE /api/prevprojects/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/prevprojects/${newPrevproject._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when prevproject does not exist', function(done) {
      request(app)
        .delete(`/api/prevprojects/${newPrevproject._id}`)
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
