//index->routes->index->v1->index->problem router

const express = require('express')
const {problemController} = require('../../controllers');

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingProblemController)
problemRouter.post('/', problemController.addProblem)
problemRouter.get('/:id', problemController.updateProblem)
problemRouter.get('/:id', problemController.getProblem)
problemRouter.get('/', problemController.getProblems)
problemRouter.get('/:id', problemController.deleteProblem)

module.exports = problemRouter;