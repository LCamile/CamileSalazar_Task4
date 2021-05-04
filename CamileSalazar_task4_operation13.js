const pool = require("./db");
const sql = `SELECT d.department_name, 
CONCAT(e.first_name,' ', e.last_name) "MANAGER"
FROM departments d
JOIN employees e
ON d.manager_id=e.employee_id`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();