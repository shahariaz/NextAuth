import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.DB_URI!);
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("Connected to database");
    });
    connection.on("error", () => {
      console.log("Error connecting to database");
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
}
