app.controller('todoController', function($scope) {
    $scope.note={};
    // $scope.note.title="zdz";
    // $scope.note.description="cxv";
    $scope.todos=[];
    $scope.myvalue = false;
    $scope.add=function(){
        $scope.myvalue = true;

        var noteTitle =document.getElementById('div1').innerHTML;
        $scope.title=noteTitle;
        //console.log("t",noteTitle);
        var noteDiscription =document.getElementById('div2').innerHTML;
        $scope.description=noteDiscription;
        var object ={title:noteTitle,description:noteDiscription};
        $scope.todos.push(object);

    }
});
