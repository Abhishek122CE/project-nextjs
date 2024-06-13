import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        // No need to include useNewUrlParser and useUnifiedTopology
      });
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Could not connect to MongoDB');
  }
};

export { connectToDB };
