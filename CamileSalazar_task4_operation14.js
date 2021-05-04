const pool = require("./db");
const sql = `SELECT job_title, ROUND (AVG(salary)) "Average Salary"
FROM employees e
INNER JOIN jobs j
ON j.job_id = e.job_id
GROUP BY job_title;
`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();