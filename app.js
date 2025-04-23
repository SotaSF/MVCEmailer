const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config(); //loading env variables in local


const homeRoutes = require('./routes/homeRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRoutes);
app.use('/email', emailRoutes);

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});