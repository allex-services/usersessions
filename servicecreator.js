function createUserSessionsService(execlib, ParentService) {
  'use strict';
  var lib = execlib.lib,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user'))
    };
  }

  function UserSessionsService(prophash) {
    ParentService.call(this, prophash);
    this.expirydays = prophash.expirydays || 10;
  }
  ParentService.inherit(UserSessionsService, factoryCreator, require('./storagedescriptor'));
  UserSessionsService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  UserSessionsService.prototype.onSuperSink = function (supersink) {
    this.supersink = supersink;
    this.clearOld();
  };
  UserSessionsService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  UserSessionsService.prototype.clearOld = function () {
    this.supersink.subConnect('.', {name: 'user', role: 'user'}).then(
      this.doClearOld.bind(this)
    );
  };
  UserSessionsService.prototype.doClearOld = function (datasink) {
    datasink.call('delete', {op: 'lt', field: 'created', value: Date.now()-this.expirydays*24*lib.intervals.Hour});
    lib.runNext(this.clearOld.bind(this), lib.intervals.Hour);
  };
  return UserSessionsService;
}

module.exports = createUserSessionsService;
