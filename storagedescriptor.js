module.exports = {
  primaryKey: 'session',
  record:{
    fields:[{
      name: 'session',
      type: 'string'
    },{
      name: 'created',
      default: '{{Date.now()}}',
      type: 'number'
    },{
      name: 'lastused',
      default: '{{Date.now()}}',
      type: 'number'
    },{
      name: 'username',
      type: 'string'
    }]
  }
};
