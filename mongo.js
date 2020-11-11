const { MongoClient } = require('mongodb');
const config = require('config');

const mongo = config.get('mongodb');

let db;

const getClient = async () => {
  if (db) {
    return db;
  }

  try {
    const client = MongoClient(mongo.uri, mongo.options);

    await client.connect();

    db = client.db(mongo.database);
    console.log('Database connected.');
    return db;
  } catch (err) {
    console.log('Database not connected.');
    throw err;
  }
};

module.exports = {
  getClient
};