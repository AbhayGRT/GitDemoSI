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
