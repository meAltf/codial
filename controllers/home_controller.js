module.exports.home = function(request, response){

        console.log(request.cookies);
        response.cookie('user_id', 299);
    //return response.end('<h1>Express is up for Codeial</h1>')

    return response.render('home', {
        title: "Home"
    });
}
