import { resolve } from 'path';
import db from './models/index.mjs';

import initBillsController from './controllers/billController.mjs';
import initPeopleController from './controllers/peopleController.mjs';

export default function routes(app) {
  const BillsController = initBillsController(db);
  const PeopleController = initPeopleController(db);

  // Root route renders Webpack-generated main.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  app.post('/createBill', BillsController.create);

  app.post('/person', PeopleController.create);
  app.post('/mealCost', PeopleController.mealCost);
}
