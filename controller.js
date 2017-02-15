//home controller
forecastApp.controller('homeController', ['$scope', 'myService' ,function($scope , myService){
    $scope.city = myService.city;
    $scope.$watch('city', function(){
                                          
                                        myService.city = $scope.city ;  
    });                                      
}]);
//forecast controller
forecastApp.controller('forecastController',['$scope' , '$resource', '$routeParams', 'myService'  ,function($scope, $resource, $routeParams, myService){
    $scope.city = myService.city;
    $scope.days = $routeParams.days ;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast");
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days || 7, APPID:'843c63c333493474353d9d9690988447'});
    console.log($scope.weatherResult);
    
    $scope.convertToCelsius = function(kelvin){
         return Math.round(kelvin-273);
    };
    $scope.convertToDate= function(dt){
        return new Date(dt*1000);
    }
}]);
//today controller
forecastApp.controller('todayController',['$scope' , '$resource' ,'myService' ,function($scope, $resource, myService){
    $scope.city = myService.city;
    $scope.todayWeatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather");
    $scope.todayResult = $scope.todayWeatherAPI.get({q: $scope.city, cnt:2, APPID:'843c63c333493474353d9d9690988447'});
     console.log($scope.todayResult);
    $scope.todayDate= function(dt){
        return new Date(dt*1000)
    }

    
}])