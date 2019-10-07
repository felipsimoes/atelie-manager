import { Router } from 'express';

const routes = new Router();

// eslint-disable-next-line func-names
routes.get('/', function(req, res) {
  res.send('Hello World!');
});

export default routes;
