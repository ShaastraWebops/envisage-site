'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  index: 'sponsorsCtrl.index',
  show: 'sponsorsCtrl.show',
  create: 'sponsorsCtrl.create',
  upsert: 'sponsorsCtrl.upsert',
  patch: 'sponsorsCtrl.patch',
  destroy: 'sponsorsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sponsorsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sponsors.controller': sponsorsCtrlStub
});

describe('Sponsors API Router:', function() {
  it('should return an express router instance', function() {
    expect(sponsorsIndex).to.equal(routerStub);
  });

  describe('GET /api/sponsors', function() {
    it('should route to sponsors.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'sponsorsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/sponsors/:id', function() {
    it('should route to sponsors.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'sponsorsCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/sponsors', function() {
    it('should route to sponsors.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'sponsorsCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/sponsors/:id', function() {
    it('should route to sponsors.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'sponsorsCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sponsors/:id', function() {
    it('should route to sponsors.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'sponsorsCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sponsors/:id', function() {
    it('should route to sponsors.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'sponsorsCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
