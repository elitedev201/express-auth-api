const secrets = {
  dbUri: process.env.DB_URI || 'mongodb://127.0.0.1:27017',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };
