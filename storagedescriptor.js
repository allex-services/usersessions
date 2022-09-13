module.exports = {
  record:{
    primaryKey: 'session',
    fields:[{
      name: 'session',
      type: 'string',
      sqltype: 'nvarchar(50)',
      postgresqltype: 'text',
      nullable: false
    },{
      name: 'created',
      default: '{{Date.now()}}',
      type: 'number',
      sqltype: 'bigint',
      nullable: false
    },{
      name: 'lastused',
      default: '{{Date.now()}}',
      type: 'number',
      sqltype: 'bigint',
      nullable: false
    },{
      name: 'username',
      type: 'string',
      sqltype: 'nvarchar(100)',
      postgresqltype: 'text',
      nullable: false
    }]
  }
};
