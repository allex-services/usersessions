function createWriterUser(execlib, ParentUser) {
  'use strict';
  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function WriterUser(prophash) {
    ParentUser.call(this, prophash);
  }
  ParentUser.inherit(WriterUser, require('../methoddescriptors/user'), [/*visible state fields here*/]/*or a ctor for StateStream filter*/, require('../visiblefields/user'));
  WriterUser.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  return WriterUser;
}

module.exports = createWriterUser;
