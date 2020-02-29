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

export async function executeProcedure(procedure, params) {
  const data = sql.SqlExecuteProcedure({
    procedureName: procedure,
    params: params
  });
  return data;
}