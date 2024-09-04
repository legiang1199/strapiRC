module.exports = {
  "users-permissions": {
    config: {
      jwtSecret: process.env.JWT_SECRET || "your-default-jwt-secret", // Replace with the actual secret or use an environment variable
    },
  },
};
