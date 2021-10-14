const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

// BASED ON PATH: ../4_queries/12_name_of_teachers_who_assisted.sql
const dbQuery = (`SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
  JOIN teachers ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2] || 'JUL02'}%'
ORDER BY teacher;
`);

pool.query(dbQuery)
  .then(res => {
    res.rows.forEach((obj) => {
      console.log(`${obj.cohort}: ${obj.teacher}`);
    });
  })
  .catch(err => console.log(err))
  .finally(pool.end());
