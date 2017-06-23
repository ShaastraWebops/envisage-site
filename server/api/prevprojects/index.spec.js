'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  index: 'prevprojectsCtrl.index',
  show: 'prevprojectsCtrl.show',
  create: 'prevprojectsCtrl.create',
  upsert: 'prevprojectsCtrl.upsert',
  patch: 'prevprojectsCtrl.patch',
  destroy: 'prevprojectsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var prevprojectsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './prevprojects.controller': prevprojectsCtrlStub
});

describe('Prevprojects API Router:', function() {
  it('should return an express router instance', function() {
    expect(prevprojectsIndex).to.equal(routerStub);
  });

  describe('GET /api/prevprojects', function() {
    it('should route to prevprojects.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'prevprojectsCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/prevprojects/:id', function() {
    it('should route to prevprojects.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'prevprojectsCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/prevprojects', function() {
    it('should route to prevprojects.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'prevprojectsCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/prevprojects/:id', function() {
    it('should route to prevprojects.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'prevprojectsCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/prevprojects/:id', function() {
    it('should route to prevprojects.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'prevprojectsCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/prevprojects/:id', function() {
    it('should route to prevprojects.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'prevprojectsCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
