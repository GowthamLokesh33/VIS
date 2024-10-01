import bodyParser from "body-parser";
import { sign } from "crypto";
import express from "express";
import { dirname } from "path";
import pg from "pg";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "indianbank",
    password: "$tu@rt@0303",
    port: 5432,
  }
);
db.connect();

const app = express();
const port = 3300;
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var isValidEmail = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  isValidEmail = false;
  res.render("index.ejs");
});

app.post("/signIn", (req, res) => {
  signIn(req,res);
  console.log("Is Valid Email : " + isValidEmail);
});

async function signIn(req, res, next) {
  var email = req.body["signInEmail"];
  var password = req.body["signInPassword"];
  // Sign In Validation
  if (emailValidation(email) == true) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 and password = $2", [email, password]);
      if (result.rowCount == 1) {
        isValidEmail = true;
        res.redirect("/home");
      } else {
        res.redirect("/");
      }
    }
    catch (err) {
      console.error(err);
    }
  } else {
    res.redirect("/");
    console.log("Invalid Email Pattern");
  }
};

app.post("/signUp", (req, res) => {
  signUp(req, res);
  console.log("Is Valid Email : " + isValidEmail);
});

function emailValidation(emailId) {
  if (typeof emailId === 'undefined') {
    emailId = '';
  } else {
    if (pattern.test(emailId)) {
      var domain = emailId.substring(emailId.lastIndexOf("@") + 1);
      // console.log(emailId.split("@"));
      if (domain === "visnet.in") {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Invalid Email Pattern");
      return false;
    }
  }
};

async function signUp(req, res, next) {
  var username = req.body["signUpUsername"];
  var emailId = req.body["signUpEmail"];
  var password = req.body["signUpPassword"];
  // Sign Off Validation
  if (emailValidation(emailId) == true) {
    if (username !== null && emailId !== null && password !== null) {
      try {
        const result = await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, emailId, password]);
        console.log("User has been created successfully");
        res.redirect("/");
      } catch (err) {
        console.error(err);
      }
    }
  } else {
    res.redirect("/");
    console.log("Invalid Email Pattern");
  }
};

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/project", (req, res) => {
  res.render("project.ejs");
});

app.get("/logout", (req, res) => {
  // disableBackButton();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Port listening on ${port}`);
});

// function disableBackButton() {
//   console.log("Disable Button");
//   // globalThis
//   console.log(globalThis);
//   console.log("Window : " + globalThis.window.History);
//   globalThis.window.history.pushState(null, "", globalThis.window.location.href);
//   globalThis.window.onpopstate = function() {
//     globalThis.window.history.pushState(null, "", globalThis.window.location.href);
//   };
//   $("#message").text("Back button disabled").delay(2000);
// }

// function preventBack() {
//   window.history.forward();
// }

// setTimeout("preventBack()",0);
// window.onunload = function() {
// return "Login Again to come back to the Page";
// };