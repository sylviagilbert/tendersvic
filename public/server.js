const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

let tenders = [];

app.post('/publish', (req, res) => {
  const tender = req.body;
  tenders.push(tender);
  res.status(200).json({ message: 'Tender published', tender });
});

app.get('/tenders', (req, res) => {
  res.json(tenders);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
