SELECT cohorts.name AS cohort_name, count(students.*) AS student_count
FROM students
INNER JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohort_name
HAVING count(*) >= 18
ORDER BY student_count;