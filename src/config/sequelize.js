const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Test query to verify tables are accessible
    const result = await sequelize.query('SELECT 1+1 AS result');
    console.log('Test query result:', result[0]);
    
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
};

module.exports = { sequelize, testConnection };