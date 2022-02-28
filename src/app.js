const express = require('express');
const path = require('path')
const date = require('./date')
const app = express();

let items = [];
let workItems = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
 res.render('about')
});

app.get('/', (req, res) => {
  const day = date.getDay();
  res.render('list', { listTitle: day, newListItems: items });

});

app.get('/work', (req, res) => {
  res.render('list', {listTitle: 'Work List', newListItems: workItems})
});

app.post('/', (req, res) => {

  const item = req.body.newItem;
  
  if (req.body.list === 'Work') {
   workItems.push(item);
    res.redirect('/work')
  }else{
   items.push(item);
    res.redirect('/');
  };

});

app.listen(3000, function () {
  console.log('the server is running at port 3000');
});