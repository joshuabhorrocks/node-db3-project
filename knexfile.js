const connectionString = process.env.DATABASE_URL || "postgressql://postgres:pass@localhost/northwind";

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/schemes.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }, 

  production: {
    client: "pg", // remember to npm i pg
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      direction: "./data/migrations",
    }
  }
};
