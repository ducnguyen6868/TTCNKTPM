class AdminControllers{
    hompage(req,res){
        res.render('homepage');
    }
}
module.exports = new  AdminControllers();