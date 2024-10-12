import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3300;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("home.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("dashboard.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/project", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("project.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/database", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("database.ejs");
  } else {
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
  })
);

app.post("/register", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  if (emailValidation(username) == true) {
    try {
      const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);
      if (checkResult.rows.length > 0) {
        res.redirect("/");
      } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.log(("Error hashing Password : ", err));
          } else {
            const result = await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [
              name,
              username,
              hash]);
            const user = result.rows[0];
            req.login(user, (err) => {
              console.log("Success");
              res.redirect("/");
            });
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect("/");
    console.log("Invalid Email Pattern");
  }
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    if (emailValidation(username) == true) {
      try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          username,
        ]);
        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.password;
          bcrypt.compare(password, storedHashedPassword, (err, valid) => {
            if (err) {
              return cb(err);
            } else {
              if (valid) {
                return cb(null, user);
              } else {
                return cb(null, false);
              }
            }
          });
        } else {
          return cb("User not found");
        }
      } catch (err) {
        return cb(err);
      }
    } else {
      console.log("Invalid Email Pattern");
      res.redirect("/");
    }
  })
);

function emailValidation(email) {
  if (typeof email === 'undefined') {
    email = '';
  } else {
    if (pattern.test(email)) {
      const domain = email.substring(email.lastIndexOf("@") + 1);
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

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});