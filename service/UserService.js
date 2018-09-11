app.factory('UserService', function(){
    var service = {};
    service.data = null;
    service.setUserData = function(data){
        this.data = data;
    };
    service.getUserData = function(){
        return this.data;
    };
    return service;
});
