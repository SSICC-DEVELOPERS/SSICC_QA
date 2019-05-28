const mongoose = require('mongoose');
const mongoparse = require('mongodb-extjson');

const OPTIONS = {
  connectionString: 'mongodb+srv://<USER>:<PASSWORD>@<CLUSTER>/<DATABASE>?retryWrites=true',
  server: '',
  database: '',
  username: '',
  password: ''
}

let db;

const connect = () =>
{
  return new Promise(
    (done, reject) =>
    {
      mongoose.Promise = global.Promise;
      mongoose.connect(OPTIONS.connectionString, { useNewUrlParser: true },
      (error, db) =>
      {
        if (error) { console.log(error); reject(error); }
        done(db);
      });
    }
  )
}

module.exports.configure = async (opts) =>
{
  if (!opts) opts = {}
  if (opts.server) OPTIONS.server = opts.server;
  if (opts.database) OPTIONS.database = opts.database;
  if (opts.username) OPTIONS.user = opts.username;
  if (opts.password) OPTIONS.password = opts.password;

  OPTIONS.connectionString = 'mongodb://localhost:27017/nombrebasedatos';
  console.log("Mongo Connectionstring", OPTIONS.connectionString);
  //db = await connect();
  connect()
  .then( (result) => { db = result; } )
  .catch( (error) => { connect().then( (resultAttempt) => { db = resultAttempt }  ) } )
}

module.exports.db = () =>
{
  return db;
}
