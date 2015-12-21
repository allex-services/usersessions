function createWriterUser(execlib, ParentUser) {
  'use strict';
  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite,
    taskRegistry = execSuite.taskRegistry;

  function WriterUser(prophash) {
    ParentUser.call(this, prophash);
  }
  ParentUser.inherit(WriterUser, require('../methoddescriptors/writeruser'), [/*visible state fields here*/]/*or a ctor for StateStream filter*/, require('../visiblefields/writeruser'));
  WriterUser.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  WriterUser.prototype.findSession = function (sessionid, defer) {
    taskRegistry.run('readFromDataSink', {
      sink: this.__service.supersink,
      filter: {
        op: 'eq',
        field: 'session',
        value: sessionid
      },
      singleshot: true,
      cb: defer.resolve.bind(defer)
    });
  };

  return WriterUser;
}

module.exports = createWriterUser;
