import SqlManager from "./SqlManager";
import { env } from "process";

const sql = new SqlManager({
  server: env.SQL_HOST,
  port: Number.parseInt(env.SQL_PORT),
  database: env.SQL_DATABASE,
  user: env.SQL_USERNAME,
  password: env.SQL_PASSWORD
});

/**
 * @param {string} procedure
 * @param {object} [params]
 */


export function executeProcedure(procedure) {
  sql.query(`CALL ${procedure}()`, true, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    return results[0];
  });
}

/**
 * @param {string} query
 * @param {object} [params]
 */
export async function executeQuery() {
  //console.log(sql);
  //  var data = sql.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //     if (error) throw error;
  //     console.log('The solution is: ', results[0].solution);
  //   });
  //   return data;
}