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
      function transform (data) {
        var key = Object.keys(data);
        var value = data[key];
        return {
          name: key[0],
          value: value
        };
      }

      function transformData (response) {
        console.log(response);
        return response.list.map(transform);
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
