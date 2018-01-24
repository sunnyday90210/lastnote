const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Handlebars Middlewear
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Index route
const title = 'Welcome';
app.get('/', (req, res) => {
 res.render('index', {title: title});
});

// About Route
app.get('/about', (req, res) => {
 res.render('about');
});


const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});