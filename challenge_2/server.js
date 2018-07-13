const express = require('express');
const path = require('path');
const axios = require('axios');

const dbHandler = require('./database/dbHandler.js')

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/bitcoinData', async (req, res) => {

  const cacheData = await dbHandler.checkCache();

  if(cacheData !== null) {
    console.log('cacheData:', cacheData)
    res.send(cacheData)

  } else {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then( (data) => {
      dbHandler.saveToCache(data.data)
      res.send(data.data)
    })
    .catch( err => {
      console.log('error fetching bitcoinData:', err)
      res.send(err)
    });
  }
});

app.listen(port, () => console.log(`Listening on port: ${port}`))

