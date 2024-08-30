import "dotenv/config";

// Define the shape of your configuration
interface Config {
  host: string;
  port: number;
  app: {
    keys: string[];
  };
}

// Parse environment variables
const appKeys = process.env.APP_KEYS
  ? process.env.APP_KEYS.split(",")
  : ["defaultKey"];

// Create the configuration object
const config: Config = {
  host: process.env.HOST || "0.0.0.0",
  port: parseInt(process.env.PORT || "1337", 10), // Ensure PORT is a number
  app: {
    keys: appKeys,
  },
};

export default config;
