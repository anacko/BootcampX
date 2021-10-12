SELECT cohorts.name, sum(completed_at - started_at) AS total_duration
FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  JOIN assistance_requests ON students.id = student_id
GROUP BY cohorts.name
ORDER BY total_duration;