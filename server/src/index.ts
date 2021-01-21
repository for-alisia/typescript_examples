import express from 'express';

import bodyParser from 'body-parser';
import cookieSeesion from 'cookie-session';
import { AppRouter } from './AppRouter';

import './controllers/LoginController';
import './controllers/RouteController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSeesion({ keys: ['somestring'] }));
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log('Listening on 3001');
});
