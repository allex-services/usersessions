function createWriterSink(execlib, ParentSink) {
  'use strict';
  if (!ParentSink) {
    ParentSink = execlib.execSuite.registry.get('.').SinkMap.get('user');
  }

  function WriterSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  ParentSink.inherit(WriterSink, require('../methoddescriptors/user'), require('../visiblefields/user'),require('../storagedescriptor'));
  WriterSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return WriterSink;
}

module.exports = createWriterSink;
