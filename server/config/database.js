import pg from 'pg'
import './dotenv.js' //imports the dotenv file which contains the address of the .env file

const config = {
    user: process.env.PGUSER,  //goes to that address and gets the user, password, host, port, and database
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

// configures the pool of connections to the database and exports it to be used in the server
export const pool = new pg.Pool(config)