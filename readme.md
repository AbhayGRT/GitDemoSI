select e.employee_id, e.first_name,e.manager_id,m.first_name 
	from employees e left join employees m
	on e.manager_id = m.employee_id;
