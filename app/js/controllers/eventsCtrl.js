/**
*
* Events Controller
*/

cityApp.controller('eventsCtrl',
  function($scope, $http){
    $scope.events = [];
    $http.get('http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival').success(function(data) {
      $scope.events = data;
    });



  })