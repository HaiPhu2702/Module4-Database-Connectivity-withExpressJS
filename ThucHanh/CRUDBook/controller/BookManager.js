
const bookModal=require('../modal/BookModal')
module.exports=class BookManager{

    constructor() {

    }

    static showListBook(req, res){
        bookModal.getListBooks()
            .then(result=>{
                let book=result.slice(0,3)
                res.render('./Book/index.ejs',{data:book})
            })
            .catch(err => {throw err})
    }

    static addBook(req, res){

        bookModal.insertBook(req.body.name,req.body.type)
            .then(result=>{
                res.redirect('/')
            })
            .catch(err => {throw err})
    }

    static deleteBookById(req,res,id){
        bookModal.deleteBookById(req,res,id)
            .then(result=>{
                res.redirect('/')
            })
            .catch(err => {throw err})
    }

    static showDetailBookByID(req, res,id){
        bookModal.showDetailBookByID(req, res,id)
            .then(result=>{
                console.log(result)
               res.render('./Book/detail.ejs',{data:result})
            })
            .catch(err => {throw err})
    }

    static showListPage(res,page, perPage){
        bookModal.getListBooks(res)
            .then(result=>{
                const start=(page-1)*perPage;
                const end=page*perPage;
               let book= result.slice(start,end)
                res.render('./Book/index.ejs',{data:book})
            })
            .catch(err => {throw err})


    }
}
