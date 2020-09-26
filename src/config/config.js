// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-3499b879843fd583e77232e2dae4957d46876a7d.cn5lnosf6sbd.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'tS_Ni{$O?q7T.e~=~cXvlB6a?e5340Ix'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}