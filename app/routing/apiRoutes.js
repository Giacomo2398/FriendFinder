var friends = require("../data/friends");

module.exports = function(app) {

    app.get("api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        let match ={
            name: "",
            photo:"",
            friendDifference: Infinity
        };

        let difference;
        let user =req.body;
        let scores = user.scores;

        for(let i = 0; i < friends.length; i++) {
            let thisFriend = friends[i];
            difference = 0;

            for(let z = 0; z < thisFriend.scores.length; z++){
                let friendScore = thisFriend.scores[z];
                let userScore = scores[z];

                difference += MAth.abs(parseInt(userScore) - parseInt(friendScore));

                if (difference <= match.friendDifference){
                    match.name = thisFriend.name;
                    match.photo = thisFriend.photo;
                    match.friendDIfference = difference;
                }
            }

            friends.push(user);
            res.json(match);
        }
    })

}