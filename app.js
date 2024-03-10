const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Artiset - Mahindra GCO' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'This is about page' });
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});