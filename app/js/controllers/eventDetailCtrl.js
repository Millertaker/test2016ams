/**
*
* EventDetail Controller
*/

cityApp.controller('eventsDetailCtrl',
  function($scope, $http, $routeParams, $sce){
    $scope.evenName;
    $scope.positionLat;
    $scope.positionLong;
    $scope.content;

    $scope.base_url = 'http://citysdk.dmci.hva.nl/CitySDK/events/';

    $http.get($scope.base_url + $routeParams.id).
      success(function(data) {
        $scope.evenName = data.label[0].value;
        $scope.positionLat = data.location.point[0].Point.posList.split(" ")[0];
        $scope.positionLong = data.location.point[0].Point.posList.split(" ")[1];
        //$scope.desc = data.description.value[0];
        for(var i in data.description) {
          data.description[i].lang.toString() === 'en-GB' ? $scope.content = data.description[i].value : $scope.content = 'No EN description'
        }
        console.log(data.description);
      });

    $scope.getHtml = function(html){
        return $sce.trustAsHtml(html);
    };
  })