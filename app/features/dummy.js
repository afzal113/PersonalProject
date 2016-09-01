(function () {
  'use strict';
  angular
    .module('app.features')
    .factory('featureFactory', function ($http) {
      var phones = {};
      function getData () {
        //  console.log('getting data')
        return mockResponse;
      }
      function returnFeatures (response) {
        console.log(response);
        return response.data;
      }
      function transformData (response) {
        return respsonse.list.map;
      }

      function loadPhones () {
        return $http.get('http://localhost:8080/phones')
          .then(returnFeatures)
          .then(transformData);
      }
      return {
        getData: getData,
        loadPhones: loadPhones,
        phones: phones
      };
    });
}());
