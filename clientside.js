function createClientSide(execlib) {
  'use strict';
  var execSuite = execlib.execSuite,
  DataServicePack = execSuite.registry.get('allex_dataservice'),
  ParentServicePack = DataServicePack;

  return {
    SinkMap: require('./sinkmapcreator')(execlib, ParentServicePack)
  };
}

module.exports = createClientSide;
