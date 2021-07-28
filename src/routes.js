const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

// criando o objeto do perfil (profile)
const profile = {
  name: "Rafael",
  avatar: "https://avatars.githubusercontent.com/u/77762757?s=400&u=3cace344a2fccf652648201d505dcb2665f111f2&v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}


// req / res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes