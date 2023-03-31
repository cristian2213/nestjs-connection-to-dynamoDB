const schema = {
  version: '0.1.0',
  format: 'onetable:1.0.0',

  indexes: {
    primary: { hash: 'pk', sort: 'sk' },
    gs1: { hash: 'gs1pk', sort: 'gs1sk', follow: true },
    ls1: { sort: 'id', type: 'local' },
  },

  models: {
    Account: {
      pk: { type: String, value: 'account:${name}' },
      name: { type: String },
    },
  },
};

export { schema };
