import app from './server';

require('dotenv').config();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Application Server is up and running on port ${port}`);
});
