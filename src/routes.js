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

const jobs = [
  {
  id: 1,
    name: 'Pizzaria Guloso',
    "daily-hours": 2,
    "total-hours": 60,
    created_at: Date.now()
  }
]

// req / res
routes.get('/', (req, res) => res.render(views + "index", { jobs }))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
  // req.body = { name: 'rafa', 'daily-hours': '8', 'total-hours': '1' }
  const lastId = jobs[jobs.length - 1]?.id || 1

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    created_at: Date.now() // atribuindo uma nova data
  })
  return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes