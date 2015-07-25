function createUserSessionsService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function UserSessionsService(prophash) {
    ParentService.call(this, prophash);
  }
  ParentService.inherit(UserSessionsService, factoryCreator, require('./storagedescriptor'));
  UserSessionsService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  UserSessionsService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return UserSessionsService;
}

module.exports = createUserSessionsService;