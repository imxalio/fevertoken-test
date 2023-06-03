const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// connect the database
mongoose.connect(DB).then(() => {
  console.log('Database connected !!!');
});

// run the server
app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT} ...`);
});
