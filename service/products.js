app.service('products', function ($http) {
    this.getData = function () {
        return $http.get("products.json").then(
            function (response) {
                return response.data;
            });
    }
});
