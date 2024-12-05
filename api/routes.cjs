const routes = [
  {
    method: 'POST',
    path: '/login',
    handler: () => {},
  },
  {
    method: 'POST',
    path: '/register',
    handler: () => {},
  },
  {
    method: 'POST',
    path: '/bookings',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/doctors',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/doctors/{doctor_id}',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/profiles/{user_id}',
    handler: () => {},
  },
];

module.exports = routes;