function sinkMapCreator(execlib, ParentServicePack) {
  'use strict';
  var sinkmap = new (execlib.lib.Map), ParentSinkMap = ParentServicePack.SinkMap;
  sinkmap.add('service', require('./sinks/servicesinkcreator')(execlib, ParentSinkMap.get('service')));
  sinkmap.add('user', require('./sinks/usersinkcreator')(execlib, ParentSinkMap.get('user')));
  sinkmap.add('writer', require('./sinks/writersinkcreator')(execlib, ParentSinkMap.get('writer')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;
