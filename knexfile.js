// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'auth',
      user: 'postgres',
      password: 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './database/migrations',
    },
  },

};
