const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  engine({ layoutsDir: "views/layouts/", defaultLayout: "main-layout" })
);
app.set("view engine", "hbs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", adminData.routes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3001);
