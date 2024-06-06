const { default: mongoose } = require("mongoose");

// const connectToDB = async () => {
//   const connectionURL = "mongodb+srv://sangammukherjee2022:sangam2024@cluster.nvranpn.mongodb.net/";

//   mongoose
//     .connect(connectionURL)
//     .then(() => console.log("jon board database connection is successfull"))
//     .catch((error) => {console.log(error);
//     console.log("not connected");});
// };
// mongoose.set('debug', true);

// export default connectToDB;
//const connectionURL = "mongodb+srv://mohsinuddinhandsome:uddin@123@cluster0.ylhda3s.mongodb.net/";
const uri= "mongodb+srv://sangammukherjee2022:sangam2024@cluster.nvranpn.mongodb.net/";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
  socketTimeoutMS: 45000, // Increase the timeout to 45 seconds
  bufferCommands: false, // Disable buffering
};

let isConnected;

const connectToDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri, options);
    isConnected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectToDB;