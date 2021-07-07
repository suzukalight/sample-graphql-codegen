require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
  },
  test: {
    dialect: 'sqlite',
    storage: './testdatabase.sqlite',
    logging: false,
  },
};
