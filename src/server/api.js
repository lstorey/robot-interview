import express from 'express';
import bodyParser from 'body-parser';
import robots from './robots.json';

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client`));

// Get the list of robots.
app.get('/api/robots', (req, res) => {
  return res.json(robots);
});

export default app;
