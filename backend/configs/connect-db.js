const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI); 
		console.log(`🔑 Success: successfully connected to the database`);
  } catch (error) {
		console.log(`🔴 Error: ${error.message}`);

  }
};


module.exports = connectDB;