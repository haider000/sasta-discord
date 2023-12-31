import mongoose from "mongoose";

let cachedMongoConnectionInstance: typeof mongoose | null = null;
const MONGODB_URI =
  process.env.MONGODB_URI && process.env.MONGODB_DB_NAME
    ? `${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`
    : "";

const connectDB = async () => {
  try {
    if (!MONGODB_URI) throw new Error("Error: No MONGODB URI found");

    if (
      cachedMongoConnectionInstance &&
      cachedMongoConnectionInstance.STATES.connected === 1
    ) {
      console.log("cached MongoDB Connection", cachedMongoConnectionInstance);
      return cachedMongoConnectionInstance;
    }

    const newMongoConnection = await mongoose.connect(MONGODB_URI);

    cachedMongoConnectionInstance = newMongoConnection;

    console.info(`
        MongoDB Connection successfull! \n 
        Connected to: ${cachedMongoConnectionInstance.connection.host} \n
        Database: ${cachedMongoConnectionInstance.connection.name}`);

    return cachedMongoConnectionInstance;
  } catch (error) {
    console.error("Mongo DB Connection failed!", JSON.stringify(error));
    process.exit(1);
  }
};

export default connectDB;
