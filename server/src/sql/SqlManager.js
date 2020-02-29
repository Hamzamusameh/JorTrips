import sql from "mysql";

/**
 * @param {object} config
 * @param {string} config.user
 * @param {string} config.password
 * @param {string} config.server
 * @param {number} [config.port=3306]
 * @param {string} config.database
 */

export default function SqlManager(config) {
  var con = sql.createConnection({
    host: config.server,
    user: config.user,
    password: config.password
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
}
