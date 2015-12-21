(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
ALLEX.execSuite.registry.add('allex_usersessionsservice',require('./clientside')(ALLEX, ALLEX.execSuite.registry.get('allex_dataservice')));

},{"./clientside":2}],2:[function(require,module,exports){
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

},{"./sinkmapcreator":6}],3:[function(require,module,exports){
module.exports = {
};

},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
module.exports = {
  findSession: [{
    title: 'Session ID',
    type: 'string'
  }]
};

},{}],6:[function(require,module,exports){
function sinkMapCreator(execlib, ParentServicePack) {
  'use strict';
  var sinkmap = new (execlib.lib.Map), ParentSinkMap = ParentServicePack.SinkMap;
  sinkmap.add('service', require('./sinks/servicesinkcreator')(execlib, ParentSinkMap.get('service')));
  sinkmap.add('user', require('./sinks/usersinkcreator')(execlib, ParentSinkMap.get('user')));
  sinkmap.add('writer', require('./sinks/writersinkcreator')(execlib, ParentSinkMap.get('writer')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;

},{"./sinks/servicesinkcreator":7,"./sinks/usersinkcreator":8,"./sinks/writersinkcreator":9}],7:[function(require,module,exports){
function createServiceSink(execlib, ParentSink) {
  'use strict';
  if (!ParentSink) {
    ParentSink = execlib.execSuite.registry.get('.').SinkMap.get('user');
  }

  function ServiceSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  ParentSink.inherit(ServiceSink, require('../methoddescriptors/serviceuser'), require('../visiblefields/serviceuser'),require('../storagedescriptor'));
  ServiceSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return ServiceSink;
}

module.exports = createServiceSink;

},{"../methoddescriptors/serviceuser":3,"../storagedescriptor":10,"../visiblefields/serviceuser":11}],8:[function(require,module,exports){
function createUserSink(execlib, ParentSink) {
  'use strict';
  if (!ParentSink) {
    ParentSink = execlib.execSuite.registry.get('.').SinkMap.get('user');
  }

  function UserSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  ParentSink.inherit(UserSink, require('../methoddescriptors/user'), require('../visiblefields/user'),require('../storagedescriptor'));
  UserSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return UserSink;
}

module.exports = createUserSink;

},{"../methoddescriptors/user":4,"../storagedescriptor":10,"../visiblefields/user":12}],9:[function(require,module,exports){
function createWriterSink(execlib, ParentSink) {
  'use strict';
  if (!ParentSink) {
    ParentSink = execlib.execSuite.registry.get('.').SinkMap.get('user');
  }

  function WriterSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  ParentSink.inherit(WriterSink, require('../methoddescriptors/writeruser'), require('../visiblefields/writeruser'),require('../storagedescriptor'));
  WriterSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return WriterSink;
}

module.exports = createWriterSink;

},{"../methoddescriptors/writeruser":5,"../storagedescriptor":10,"../visiblefields/writeruser":13}],10:[function(require,module,exports){
module.exports = {
  record:{
    primaryKey: 'session',
    fields:[{
      name: 'session'
    },{
      name: 'created',
      default: '{{Date.now()}}'
    },{
      name: 'lastused',
      default: '{{Date.now()}}'
    },{
      name: 'username'
    }]
  }
};

},{}],11:[function(require,module,exports){
module.exports = [];

},{}],12:[function(require,module,exports){
module.exports = ['session','created','username'];

},{}],13:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}]},{},[1]);
