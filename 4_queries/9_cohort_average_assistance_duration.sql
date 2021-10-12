SELECT avg(total_duration) AS average_total_duration
FROM ( 
  SELECT sum(completed_at - started_at) AS total_duration
  FROM students
    JOIN cohorts ON cohort_id = cohorts.id
    JOIN assistance_requests ON students.id = student_id
  GROUP BY cohorts.name) AS total_duration_by_cohort;