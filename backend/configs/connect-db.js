const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}.7dfybnh.mongodb.net/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`);
		console.log(`🔑 Success: successfully connected to the database`);
  } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
  }
};


module.exports = connectDB;