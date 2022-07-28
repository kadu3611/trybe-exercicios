select max(salary) from hr.employees;

select max(salary) - min(salary)
from hr.employees;

select round(max(salary), 2), round(min(salary), 2), round(sum(salary), 2), round(avg(salary), 2)
from hr.employees;

SELECT department_id,
	AVG(salary) 'Média_salarial',
	COUNT(*) 'Número_de_funcionários'
FROM hr.employees
GROUP BY department_id
HAVING Número_de_funcionários > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = replace(phone_number, '515', '777')
where phone_number like '515%'
limit 107;

select employee_id, first_name, day(hire_date) from hr.employees;

select first_name, last_name, datediff(date(now()), hire_date) 'dias_trabalhados' from hr.employees;




