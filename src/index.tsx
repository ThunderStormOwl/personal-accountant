import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salary',
          value: 4000,
          type: 'deposit',
          category: 'Work',
          createdAt: new Date('06-09-2022 9:35:00'),
        },
        {
          id: 2,
          title: 'Burger',
          value: 35.98,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date('12-10-2022 15:11:00'),
        },
        {
          id: 3,
          title: 'Bloodborne',
          value: 250,
          type: 'withdraw',
          category: 'Games',
          createdAt: new Date('31-10-2015 00:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
