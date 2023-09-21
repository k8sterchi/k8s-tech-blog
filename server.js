const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars engine
const hbs = exphbs.create({
    // Specify your configuration options here
    defaultLayout: 'main', // This sets the default layout to 'main.handlebars'
  });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

// Define your routes and middleware here

app.get('/', (req, res) => {
  res.render('index'); // Renders the 'index.handlebars' template
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});