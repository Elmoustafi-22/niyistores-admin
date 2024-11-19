import { MongoClient, ServerApiVersion } from "mongodb";

// Ensure the MONGODB_URI environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Initialize the MongoDB client and promise
let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use a global variable to preserve the client during development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // For production, create a new client instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the client promise for use throughout the app
export default clientPromise;
