const express = require("express");
const app = express();
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);

/*app.use((req, res, next) => {
    res.json ({message: 'Application utilisable'});
    next();
})
*/

module.exports = app;
