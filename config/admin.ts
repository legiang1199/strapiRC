import "dotenv/config";

export default () => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET || process.env.JWT_SECRET, // Provide a default value if not defined
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || "defaultSalt", // Provide a default value if not defined
  },
  transfer: {
    token: {
      salt: process.env.TRANSFER_TOKEN_SALT || "defaultTokenSalt", // Provide a default value if not defined
    },
  },
  flags: {
    nps: process.env.FLAG_NPS === "true", // Convert 'true' string to boolean
    promoteEE: process.env.FLAG_PROMOTE_EE === "true", // Convert 'true' string to boolean
  },
});
