export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      enable: true,
      origin: [
        "https://h5.zdn.vn", // Ensure this is the correct URL without trailing slashes
        "zbrowser://h5.zdn.vn",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Headers", // This header is typically handled by the server, not the client
      ],
      keepHeaderOnError: true, // Optional, remove if not needed
    },
  },
];
