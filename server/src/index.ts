import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSeesion from 'cookie-session';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSeesion({ keys: ['somestring'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log('Listening on 3001');
});
