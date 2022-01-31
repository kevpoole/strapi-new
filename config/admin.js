module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5b3a7c59f9d43ba48a36ffa581307b1'),
  },
});
