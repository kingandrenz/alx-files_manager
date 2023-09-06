// Import necessary utilities
const RedisClient = require('../utils/redis');
const DBClient = require('../utils/db');

const AppController = {
  getStatus: async (req, res) => {
    try {
      // Check Redis and DB status
      const redisStatus = await RedisClient.isAlive();
      const dbStatus = await DBClient.isAlive();

      // Return status as JSON
      res.status(200).json({ redis: redisStatus, db: dbStatus });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStats: async (req, res) => {
    try {
      // Get the number of users and files from DB
      const usersCount = await DBClient.nbUsers();
      const filesCount = await DBClient.nbFiles();

      // Return counts as JSON
      res.status(200).json({ users: usersCount, files: filesCount });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AppController;

