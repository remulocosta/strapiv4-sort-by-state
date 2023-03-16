module.exports = ({ env }) => ({
  ckeditor: true,
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 250mb in bytes
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  seo: {
    enabled: true,
  },
});
