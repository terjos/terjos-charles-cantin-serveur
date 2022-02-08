module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '68263e6778e91400c735c33e423eb50f'),
  },
});
