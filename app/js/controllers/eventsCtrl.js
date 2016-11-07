/**
*
* Events Controller
*/

cityApp.controller('eventsCtrl',
  function($scope, $http){
    $scope.events = [];
    $scope.size = 0;

    $http.get('http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival').success(function(data) {
      $scope.events = data.event;
      console.log($scope.events);
    });
  })