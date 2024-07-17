-- cross join
select c.pk,c.title,p.pk,p.category,p.title from categories c,posts p;
--inner join
-- filter all the rows that have the same value as the category field 
--(category.pk = posts.category)
select c.pk,c.title,p.pk,p.category,p.title 
	from categories c,posts p where c.pk=p.category;
--it can be written in an other way 
select c.pk,c.title,p.pk,p.category,p.title from categories c 
inner join posts p on c.pk=p.category
--INNER JOIN versus EXISTS/In
--search for all posts that belong to the Database category using the INNER JOIN condition
select c.pk,c.title,p.pk,p.category,p.title from categories c 
inner join posts p on c.pk=p.category where c.title='Database';
 --LEFT JOINS
select c.*,p.category,p.title from categories c left join posts p on c.pk=p.category;
--This query returns all records of the categories table and 
--returns the matched records from the posts table.
--Using RIGHT JOIN
select c.*,p.category,p.title from posts p right join categories c on c.pk=p.category;
--Full outer join
FULL OUTER JOIN is the combination of what we would have if we put together the right 
join and the left join. 
