function createServicePack(execlib) {
  'use strict';

  return {
    service: {
      dependencies: ['allex:data']
    },
    sinkmap: {
      dependencies: ['allex:data']
    }
  };
}

module.exports = createServicePack;

