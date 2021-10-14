const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const params = process.argv.slice(2);

pool.query(
  // SQL string
  `SELECT students.id AS id, students.name AS name, cohorts.name AS cohort_name
    FROM students
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE $1
    LIMIT $2;`,
  // Array with $1 and $2
  [`%${params[0]}%`, params[1] || 5]
)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack))
  .finally(pool.end());