/**
*
* Events Controller
*/

cityApp.controller('eventsCtrl',
  function($scope, $http){
    $scope.events = [];
    $scope.size = 0;
    $scope.url = 'http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival';

    $http.get($scope.url).
      success(function(data) {
        $scope.events = data.event;
      });
  })