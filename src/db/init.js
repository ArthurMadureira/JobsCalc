const Database = require('./config')

const initDb = {
  async init() {
  const db =  await Database()

  await db.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
  )`)

  await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INTEGER,
    total_hours INTEGER,
    created_at DATETIME
  )`)

  await db.run(`INSERT INTO profile (
    name,
    avatar,
    monthly_budget, 
    days_per_week, 
    hours_per_day, 
    vacation_per_year,
    value_hour ) VALUES (
      "Arthur",
      "https://www.github.com/ArthurMadureira.png",
      3000,
      5,
      5,
      4,
      70
    )`)




  await db.close()

  }

}

initDb.init()