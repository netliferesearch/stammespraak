const express = require('express');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 3000;
const app = express();
app.use(history());
app.use(express.static(`${__dirname}/build`));
app.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
