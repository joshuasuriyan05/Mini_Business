const app = require('./app1');

const PORT = process.env.PORT || ;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});