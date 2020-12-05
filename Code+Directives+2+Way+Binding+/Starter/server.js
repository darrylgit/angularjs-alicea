const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.htm');
});
app.get('/api', (req, res) => {
  const rulesJSON = [
    { id: 1, RuleName: 'Must be 5 characters' },
    { id: 1, RuleName: 'Must not be used elsewhere' },
    { id: 1, RuleName: 'Must be cool' }
  ];
  res.send(rulesJSON);
});

app.listen(3000, () => console.log('listening on port 3000'));
