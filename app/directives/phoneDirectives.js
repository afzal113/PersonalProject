(function () {
  angular.module('app.directives', [])
    .directive('myDirective', function () {
      return {
        restrict: 'AE',
        replace: false,
        templateUrl: 'directives/directive.html.tpl'
      };
    });
})();
