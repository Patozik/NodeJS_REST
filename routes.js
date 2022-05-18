module.exports = function(app) {
    app.route("/test")
        .get(function(req, res){
            res.json("This is GET method");
        })
        
        .post(function(req, res){
            res.json("Hello, " + req.body.name);
        });
}