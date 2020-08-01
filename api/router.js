const express = require('express');
 
module.exports = function (Model) {
    const modelKey = Model.modelName.toLowerCase();
    const router = express.Router();
    const controller = require('./controller');
    const ctrl = controller(Model);
    
    router.get(`/api/${modelKey}/`, ctrl.findAll);
    router.get(`/api/${modelKey}/:_id`, ctrl.findById);
    router.post(`/api/${modelKey}/`, ctrl.create);
    router.delete(`/api/${modelKey}/:id`, ctrl.delete);
    router.put(`/api/${modelKey}/:id`, ctrl.update);
   
    return router;
}