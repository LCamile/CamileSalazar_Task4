const pool = require("./db");
const sql = `SELECT e.first_name,
e.last_name,
d.department_id,
d.department_name
FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();