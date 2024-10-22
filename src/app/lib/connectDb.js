import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async () => {
  if (db) return db;
  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USERNAME}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@cluster20.1jwh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster20`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    console.log("MongoDB connected successfully!"); // Success message
    db = client.db("portfolioDB");
    return db;
  } catch (error) {
    console.log('Failed to connect to the database', error)
  }
};
