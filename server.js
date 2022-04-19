const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', `${__dirname}/dist/`);

app.use(express.static(`${__dirname}/dist/`));

app.get('/*', function(req, res){
  res.render(`${__dirname}/dist/index.html`);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});