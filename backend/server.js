const dotenv = require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./router');
const connectDB = require('./configs/connect-db');

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, async () => {
  await connectDB();
	console.log(`🚀 Server is up and running on port ${port}!`);
});