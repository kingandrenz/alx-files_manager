import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const dbURL = `mongodb://${host}:${port}/${database}`;

    this.client = new MongoClient(dbURL, { useUnifiedTopology: true });
    this.client.connect();
    this.db = this.client.db(database);
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const usersCollection = this.db.collection('users');
    const userCount = await usersCollection.countDocuments();
    return userCount;
  }

  async nbFiles() {
    const filesCollection = this.db.collection('files');
    const fileCount = await filesCollection.countDocuments();
    return fileCount;
  }
}

const dbClient = new DBClient();
export default dbClient;
