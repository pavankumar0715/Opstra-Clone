module.exports.getData = function(req,res){
    let queries=req.query;

    let symbol=queries.sym;
    let sp=queries.sp;
    let exp=queries.exp;

    return res.json(200,{
        
    })
}