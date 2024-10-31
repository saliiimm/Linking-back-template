const express = require('express');
const app = express();
const cors = require('cors');
const mainRoutes = require('./src/api/routes/index');
require('dotenv').config();

require('./src/config/connectDb');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
