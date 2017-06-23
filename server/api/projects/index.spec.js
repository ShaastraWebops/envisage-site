'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  index: 'projectsCtrl.index',
  show: 'projectsCtrl.show',
  create: 'projectsCtrl.create',
  upsert: 'projectsCtrl.upsert',
  patch: 'projectsCtrl.patch',
  destroy: 'projectsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var projectsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './projects.controller': projectsCtrlStub
});

describe('Projects API Router:', function() {
  it('should return an express router instance', function() {
    expect(projectsIndex).to.equal(routerStub);
  });

  describe('GET /api/projects', function() {
    it('should route to projects.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'projectsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/projects/:id', function() {
    it('should route to projects.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'projectsCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/projects', function() {
    it('should route to projects.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'projectsCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/projects/:id', function() {
    it('should route to projects.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'projectsCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/projects/:id', function() {
    it('should route to projects.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'projectsCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/projects/:id', function() {
    it('should route to projects.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'projectsCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
