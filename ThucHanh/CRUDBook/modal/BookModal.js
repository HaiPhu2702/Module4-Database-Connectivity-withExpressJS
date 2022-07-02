

const connectMySQL=require('./DBConnect').connectMySQL()

module.exports=class BookModal{

    constructor() {
    }

    static getListBooks(){
        return new Promise(function(resolve, reject){
            let sql=`select * from Book`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

   static insertBook(name,type){
        return new Promise(function(resolve, reject){
            let sql=`insert into Book(name,type) values('${name}','${type}')`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    static deleteBookById(req,res,id){
        return new Promise(function(resolve, reject){
            let sql=`delete from Book where idBook ='${id}'`
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve('ok');
            })
        })
    }

    static showDetailBookByID(req, res,id){
        return new Promise(function(resolve, reject){
            let sql=`select B.idBook,B.name,B.type,D.author,D.NXB
                     from Book B
                     join DetailBook D on B.idDetailBook=D.idDetailBook
                     where B.idBook='${id}'
                     `
            connectMySQL.query(sql,(err,result)=>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }


}