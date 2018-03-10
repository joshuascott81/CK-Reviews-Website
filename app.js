const express = require('express');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('landing');
});

//Reviews CRUD

app.post('/reviews', (req, res) => {
  res.render('reviews');
});

app.get('/reviews', (req, res) => {
  res.render('reviews');
});
//
// app.put('/reviews/' + _:id), (req, res) => {
//   res.render('reviews')
// }
// app.delete

app.listen(3000, () => {
  console.log('Server running');
});
