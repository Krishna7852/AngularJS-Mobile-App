app.controller('loginCtrl', function ($scope, $state) {
    $scope.isMatchPasswordWithEmail = false;
    $scope.submit = function () {
        $state.go('home.dashboard');
        console.log($scope.userEmail);
        console.log($scope.password);
    };
    $scope.comaprePassword = function (password, email) {
        if (password && email) {
            var index = email.indexOf('@');
            var userId = email.substr(0, index);
            var emailArr = Array.from(userId);
            var passwordArr = Array.from(password);
            var charMatch = emailArr.filter(function (emailChar) {
                return passwordArr.find(function (passwordChar) {
                    return passwordChar === emailChar;
                });
            });
            if (!charMatch.length) {
                $scope.isMatchPasswordWithEmail = false;
                console.log('password not match with current email Id');
            } else {
                $scope.isMatchPasswordWithEmail = true;
                console.log('password match with current email Id plz change the password');
            }
        }
    };
});
