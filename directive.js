
forecastApp.directive('weatherReport',function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
    //isolating scope    
        scope: {
            weather: '=',
            standard: '&',
            date: '&',
            timeFormat:"@"
        }
    }
})