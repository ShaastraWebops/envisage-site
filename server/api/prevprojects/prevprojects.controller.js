/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/prevprojects              ->  index
 * POST    /api/prevprojects              ->  create
 * GET     /api/prevprojects/:id          ->  show
 * PUT     /api/prevprojects/:id          ->  upsert
 * PATCH   /api/prevprojects/:id          ->  patch
 * DELETE  /api/prevprojects/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Prevproject from './prevprojects.model';
import path from 'path';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Prevprojects
export function index(req, res) {
  return Prevproject.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Prevproject from the DB
export function show(req, res) {
  return Prevproject.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Prevproject in the DB
export function create(req, res) {
  return Prevproject.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Prevproject in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Prevproject.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Prevproject in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Prevproject.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function serve(req,res) {
  if(process.env.IMAGEPATH_ENV){
  res.sendFile(path.resolve(process.env.IMAGEPATH_ENV + '/images/Envisage/images/prev/' + req.params.name));
}
else {
  res.sendFile(path.resolve('client/assets/images/prev/' + req.params.name));
}
}


// Deletes a Prevproject from the DB
export function destroy(req, res) {
  return Prevproject.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
