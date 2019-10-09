"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const asideMenu = require("./asideMenu.json");
const headerMenu = require("./headerMenu.json");
const linkGenerator_1 = require("./linkGenerator");
console.log(asideMenu);
const app = express();
const router = express.Router();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(router);
app.use(function (_req, res) {
    res.status(404).render("404");
});
// index page
router.get("/", function (_req, res) {
    res.render("index", {
        page: "home",
        asideMenu,
        headerMenu,
        linkGenerator: linkGenerator_1.linkGenerator
    }); // views/index.ejs
});
router.get("/:page", function (req, res) {
    if (fs.existsSync("views/pages/" + req.params.page + ".ejs")) {
        res.render("index", {
            page: req.params.page,
            asideMenu,
            headerMenu,
            linkGenerator: linkGenerator_1.linkGenerator
        });
    }
    else {
        res.status(404).render("404");
    }
});
router.get("/:page", function (req, res) {
    if (fs.existsSync("views/pages/" + req.params.page + ".ejs")) {
        res.render("index", {
            page: req.params.page,
            asideMenu,
            headerMenu,
            linkGenerator: linkGenerator_1.linkGenerator
        });
    }
    else {
        res.status(404).render("404");
    }
});
app.listen(8080);
console.log("listening on port 8080");
//# sourceMappingURL=index.js.map