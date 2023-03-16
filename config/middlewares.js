module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'blob:',
            'data:',
            `${process.env.STORAGE_URL}`,
            `${process.env.PUBLIC_URL}`,
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'dl.airtable.com',
            `${process.env.STORAGE_URL}`,
            `${process.env.PUBLIC_URL}`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'dl.airtable.com',
            `${process.env.STORAGE_URL}`,
            `${process.env.PUBLIC_URL}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:1337",
        "http://localhost:3000",
        `${process.env.PUBLIC_URL}`,
      ],
    },
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "250mb", // modify form body
      jsonLimit: "250mb", // modify JSON body
      textLimit: "250mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
