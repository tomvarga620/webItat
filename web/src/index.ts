import * as express from "express";
import * as fs from "fs";
import * as asideMenu from "./asideMenu.json";
import * as headerMenu from "./headerMenu.json";
import { linkGenerator } from "./linkGenerator";
console.log(asideMenu);
const app = express();
const router = express.Router();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(router);
app.use(function(_req, res) {
  res.status(404).render("404");
});

// index page
router.get("/", function(_req, res) {
  res.render("index", {
    page: "home",
    asideMenu,
    headerMenu,
    linkGenerator
  }); // views/index.ejs
});

router.get("/:page", function(req, res) {
  if (fs.existsSync("views/pages/" + req.params.page + ".ejs")) {
    res.render("index", {
      page: req.params.page,
      asideMenu,
      headerMenu,
      linkGenerator
    });
  } else {
    res.status(404).render("404");
  }
});



router.get("/:page", function(req, res) {
  if (fs.existsSync("views/pages/" + req.params.page + ".ejs")) {
    res.render("index", {
      page: req.params.page,
      asideMenu,
      headerMenu,
      linkGenerator
    });
  } else {
    res.status(404).render("404");
  }
});

app.listen(8080);
console.log("listening on port 8080");
