interface EnvConfig {
  JWT_SECRET: string;
}

// Type assertion for process.env
const getEnvConfig = (): EnvConfig => {
  const envConfig = {
    JWT_SECRET: process.env.JWT_SECRET || "default-jwt-secret", // Use default values if needed
  };

  // Optionally, you can validate the required environment variables here

  return envConfig;
};

// Use the environment configuration in your plugin configuration
export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const { JWT_SECRET } = getEnvConfig();

  return {
    "users-permissions": {
      config: {
        jwtSecret: JWT_SECRET,
      },
    },
  };
};
