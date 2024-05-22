const NotImplemented = require('../errors/notImplemented.error');


function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

function addProblem(req,res,next){
    try {
        // nothing NotImplemented
        throw new NotImplemented('addProblem');
        console.log('add problem')
    } catch (error) {
       next(error)
        
    }
}

function getProblem(req,res,next){
    try {
         // nothing implemented
         throw new NotImplemented('get Problem');
    } catch (error) {
        next(error)
    }
}

function getProblems(req,res,next){
    try {
         // nothing implemented
         throw new NotImplemented('get Problems');
    } catch (error) {
        next(error)
    }
}

function updateProblem(req,res,next){
    try {
         // nothing implemented
         throw new NotImplemented('Update Problem');
    } catch (error) {
        next(error)
    }
}


function deleteProblem(req,res,next){
    try {
        // nothing implemented
        throw new NotImplemented('Delete Problem'); 
    } catch (error) {
        next(error)
    }
}

module.exports={
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}