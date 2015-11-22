function createUserSessionsService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')),
      'writer': require('./users/writerusercreator')(execlib, parentFactory.get('writer'))
    };
  }

  function UserSessionsService(prophash) {
    ParentService.call(this, prophash);
  }
  ParentService.inherit(UserSessionsService, factoryCreator, require('./storagedescriptor'));
  UserSessionsService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  UserSessionsService.prototype.onSuperSink = function (supersink) {
    this.supersink = supersink;
  };
  UserSessionsService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return UserSessionsService;
}

module.exports = createUserSessionsService;
