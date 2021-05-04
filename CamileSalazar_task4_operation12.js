const pool = require("./db");
const sql = `SELECT department_name,AVG(salary),COUNT(employee_id)"number of employees"
FROM employees e
INNER JOIN departments d
ON e.department_id=d.department_id
WHERE e.commission_pct is not null
GROUP BY department_name;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();