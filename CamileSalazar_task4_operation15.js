const pool = require("./db");
const sql = `SELECT country_name,
city,COUNT(d.department_id) 
FROM countries a ,
locations b , departments c , 
(SELECT department_id from employees
GROUP BY department_id having count(*) > 1) d 
WHERE a.country_id = b.country_id
AND   b.location_id = c.location_id
AND   c.department_id = d.department_id
GROUP BY country_name,city;
`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();