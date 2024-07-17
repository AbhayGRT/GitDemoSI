-- Write a query to capitalize the first letter of each word in the job titles from the jobs table.
select INITCAP(job_title) as full_name from jobs;

-- Write a query to find the region names that start with the letter "A" (case-insensitive).
select * from regions where region_name ilike 'A%';

-- Write a query to concatenate the first name and last name of employees, separated by a comma, and pad the resulting string with dashes ("-") on both sides to make it 30 characters long.
SELECT CONCAT('-',first_name,',',last_name,'-') as full_name from employees;

-- Write a query to extract the last two characters of postal codes from the locations table and display them in uppercase.
select upper(right(postal_code,2)) as last_two_digit from locations;

-- Write a query to retrieve the job titles along with the length of each job title (number of characters).
select job_title,length(job_title) from jobs;


17/07/2024 PostgreSQL Day 3
-----------------------JOINS------------------------

set search_path to HRDB, public;
show search_path;

--Display employees First Name, Last Name along with their department name
select e.first_name, e.last_name, d.department_name 
	FROM employees e
	join departments d on e.department_id = d.department_id;

select e.first_name, e.last_name, d.department_name 
	FROM employees e, departments d
	WHERE e.department_id = d.department_id;

-- Display Susan's First Name details along with department deatails
select * from employees e
	join departments d on e.department_id = d.department_id
	WHERE e.first_name ilike 'Susan';

select * from employees e, departments d
	where e.department_id = d.department_id 
	AND e.first_name ilike 'susan';

--Joining Employees, Departments and Locations 
select e.first_name, e.last_name, d.department_name, l.city
	FROM employees e
	JOIN departments d ON e.department_id = d.department_id 
	JOIN locations l ON d.location_id = l.location_id;

--Display the first name, last name, as 'Full Name', along with the address and city
select concat(e.first_name, '.', e.last_name) as "Full_Name", 
	concat(l.street_address, '. ', l.postal_code, l.city, ', ', l.state_province, ', ', l.postal_code) as "Address"
	FROM employees e
	JOIN departments d on e.department_id = d.department_id
	JOIN locations l on d.location_id  = l.location_id;


-- Display the employee name, address, country and region
select concat(e.first_name, '.', e.last_name) as "Full_Name", 
	concat(l.street_address, '. ', l.postal_code, l.city, ', ', l.state_province, ', ', l.postal_code) as "Address",
	c.country_name, r.region_name
	FROM employees e
	JOIN departments d on e.department_id = d.department_id
	JOIN locations l on d.location_id  = l.location_id
	JOIN countries c on l.country_id = c.country_id
	JOIN regions r on c.region_id  = r.region_id;

-- Display the First_Name, last_name, department_name of the employees purchasing 
select e.first_name, e.last_name, d.department_name 
	FROM employees e
	join departments d on e.department_id = d.department_id
	where d.department_name = 'Purchasing';

-- Display the total count of employees from purchasing deartment
SELECT count(e.employee_id)
	FROM employees e
	join departments d on e.department_id = d.department_id
	where d.department_name = 'Purchasing';

