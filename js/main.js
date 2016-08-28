var todo=angular.module('todo',['ngAnimate']);
todo.controller('mainCtrl',['$scope','$timeout',function($scope,$timeout){
    $scope.head="Todos";
    var getTime=function(){
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        m=(m<10)?('0'+m):m;
        s=(s<10)?('0'+s):s;
        return h+':'+m+':'+s;
    }
    $scope.title=getTime();
    setInterval(function(){
        $timeout(function(){
            var date=new Date();
            var h=date.getHours();
            var m=date.getMinutes();
            var s=date.getSeconds();
            m=(m<10)?('0'+m):m;
            s=(s<10)?('0'+s):s;
            $scope.title=h+':'+m+':'+s;
        },0)
    },500)

   $scope.content=[
        {id:1, name:'maicai',isDone:false},
        {id:2, name:'zuofan',isDone:true},
        {id:3, name:'bb', isDone:false},
        {id:4, name:'VVvbvb',isDone:true}
    ];
    if(localStorage.x){
        $scope.content=JSON.parse(localStorage.x)
    }else{
        $scope.content=[];
    }
    // $scope.count=$scope.content.length;
    $scope.save=function(){
        localStorage.x=JSON.stringify($scope.content);
    }
    //添加
    $scope.name="";
    $scope.add=function (e) {
        if(e.keyCode===13){
            if($scope.content.length===0){
                var id=1000;

            }else{
                var max=-Infinity;
                for(var i=0;i<$scope.content.length;i++){
                    var value=$scope.content[i];
                    if(value.id>max){
                        max=value.id;
                    }

                }
                var id = max+1;
            }
            var item={id:id,name:$scope.name,isDone:false};
            $scope.content.push(item);
            // console.table($scope.content);
            $scope.name='';
            // $scope.count=$scope.content.length;
        }

    }
    //改状态
    $scope.focus=function(e){
        $timeout(function(){
           $(e.currentTarget).find('input').trigger('focus');
        },0)
    }
    //删除
    $scope.delete=function(id){
        var index;
        for(var i=0; i<$scope.content.length;i++){
            if($scope.content[i].id==id){
                index=i;
            }
        }

        $scope.content.splice(index,1);
        // $scope.count=$scope.content.length;
    }
    $scope.clear=function(){
        var arr=[];
        for(var i=0;i<$scope.content.length;i++){
            if(!$scope.content[i].isDone){
                arr.push($scope.content[i]);
            }
        }
        $scope.content=arr;
        $scope.count=$scope.content.length;
    }
    /*$scope.setcount=function(type){
        if(type==='quanbu'){
            $scope.count=$scope.content.length;
        }else if(type==='weiwancheng'){
            var num=0;
            for(var i=0;i<$scope.content.length;i++){
                if($scope.content[i].isDone){
                    num++
                }
            }
            $scope.count=num;
        }else if(type==='yiwancheng'){
            var num=0;
            for(var i=0;i<$scope.content.length;i++){
                if($scope.content[i].isDone){
                    num++
                }
            }
            $scope.count=num;

        }
    }*/

    /*$scope.addClass=function(e){
        angular.element(e.srcElement).addClass('bianji');
    }*/
  /*  $scope.check=function(i){
        var v=
    }
*/
}
]);
