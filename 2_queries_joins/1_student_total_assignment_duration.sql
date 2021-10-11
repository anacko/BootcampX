SELECT sum(duration) AS total_duration
FROM students INNER JOIN assignment_submissions ON students.id = student_id
WHERE name = 'Ibrahim Schimmel';