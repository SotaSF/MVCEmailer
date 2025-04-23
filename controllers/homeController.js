exports.getHomePage = (req, res) => {
    res.render('home/index', { title: 'MVC Nodemailer App' });
  };