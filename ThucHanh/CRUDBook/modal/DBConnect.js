module.exports=class DBConnect{
static connectMySQL(){
    {
        return require('mysql').createConnection({
            location:'localhost',
            user: 'root',
            password: "Matkhau1234@@",
            database:"BookManager",
            charset:"utf8_general_ci"
        })
    }
}
}