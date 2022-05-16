/* module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "ec2-34-242-84-130.eu-west-1.compute.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d6tspl6koc5j6g"),
      user: env("DATABASE_USERNAME", "yqufplrxiuvylt"),
      password: env(
        "DATABASE_PASSWORD",
        "b3a879436ae510a39d6455d8fad34f89af8d2cdf5291b7051bd34c26c95a392d"
      ),
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
}); */
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
});
