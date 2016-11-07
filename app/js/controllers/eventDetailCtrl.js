/**
*
* EventDetail Controller
*/

cityApp.controller('eventsDetailCtrl',
  function($scope, $http){
    $scope.events = [];
    $scope.size = 0;
    $scope.base_url = 'http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival';

    $http.get($scope.url).
      success(function(data) {
        $scope.events = data.event;
      });
  })