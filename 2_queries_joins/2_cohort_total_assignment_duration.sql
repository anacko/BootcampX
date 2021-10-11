SELECT sum(assignment_submissions.duration) AS total_duration
FROM students 
  INNER JOIN cohorts ON cohort_id = cohorts.id
  INNER JOIN assignment_submissions ON students.id = student_id
WHERE cohorts.name = 'FEB12';