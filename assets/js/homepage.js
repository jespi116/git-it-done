var getUserRepos = function() {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
};

user = "jespi116"

getUserRepos();