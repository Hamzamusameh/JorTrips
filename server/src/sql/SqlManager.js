import sql from "mysql";
import { env } from "process";

var con = sql.createConnection({
  host: env.SQL_HOST,
  user: env.SQL_USERNAME,
  password: env.SQL_PASSWORD,
  database: env.SQL_DATABASE
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

/**
 * @param {string} procedure
 * @param {object} [params]
 */


export function executeProcedure(procedure, cb) {
  return con.query(`CALL ${procedure}()`, true, cb);
}

export function executeAddItemProcedure(procedure, params, cb) {
  console.log(JSON.stringify(params))
  return con.query(`CALL ${procedure} ('${params.ArName}',
                                       '${params.EnName}',
                                       '${params.ArDescription}',
                                       '${params.EnDescription}',
                                       '${params.Address}',
                                       '${params.OwnerName}',
                                       '${params.PhoneNumber}',
                                       '${params.Type}'
                                       )`, true, cb);
}

export function executeDeleteItemProcedure(procedure, id, cb) {
  console.log('at sql' + id)
  return con.query(`CALL ${procedure} (${id})`, true, cb);
}
/**
 * @param {string} query
 * @param {object} [params]
 */
export async function executeQuery() {
  console.log(con);
  var data = con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  return data;
}