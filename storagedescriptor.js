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
